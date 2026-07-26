import userModel from "../models/user.model.js"
import crypto from "crypto"
import jwt from "jsonwebtoken"
import config from "../config/config.js"
import sessionModel from "../models/session.model.js"

export const register = async (req, res) => {
    try {
        const {username, email, password}=req.body

        const isAlreadyRegistered = await userModel.findOne({
            $or: [
                {username},
                {email}
            ]
        })

        if(isAlreadyRegistered) {
            res.status(409).json({
                message: "Username or email already exists"
            })
        }

        const hashedPass = crypto.createHash("sha256").update(password).digest("hex")

        const user = await userModel.create({
            username,
            email,
            password: hashedPass
        })

        //* it will be stored in cookie
        const refreshToken = jwt.sign(
            {id: user._id},
            config.JWT_SECRET,
            {expiresIn: "5d"}
        )


        const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex")

        const session = await sessionModel.create({
            user: user._id,
            refreshTokenHash,
            ip: req.ip,
            userAgent: req.headers["user-agent"]
        })


        //* it will be stored in memory
        const accessToken = jwt.sign(
            {
                id: user._id,
                sessionId: session._id
            },
            config.JWT_SECRET,
            {expiresIn: "15m"}
        )

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 5 * 24 * 60 * 60 * 1000
        })

        res.status(201).json({
            message: "User registered successfully",
            user: {
                username,
                email
            },
            accessToken
        })

    } catch (error) {
        res.status(401).json({
            message: `Error in register-controller\n ${error}`
        })
    }
}

export const login = async (req, res) => {
    const {email, password} = req.body;

    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");

    const isValidUser = await userModel.findOne({
        email,
        password: hashedPassword
    })

    if(!isValidUser) {
        return res.status(401).json({
            message: "Please register before login"
        })
    }

    res.status(200).json({
        message: "User logged in successfully",
        user: {
            username: isValidUser.username,
            email: isValidUser.email
        }
    })
}

export const getme = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]
        const decoded = jwt.verify(token, config.JWT_SECRET)

        // console.log(decoded)

        const user = await userModel.findById(decoded.id)

        res.status(201).json({
            message: "User found",
            user: {
                username: user.username,
                email: user.email
            }
        })
    } catch (error) {
        console.log("token not found")
    }
}

export const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;

        if(!refreshToken) {
            return res.status(401).json({
                message: "Refresh token not found"
            })
        }

        const decoded = jwt.verify(refreshToken, config.JWT_SECRET)

        // if session is not revoked
        // then only we can create a accessToken 
        // using that refreshToken
        const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex");
        const session = await sessionModel.findOne({
            refreshTokenHash,
            revoked: false
        })

        if(!session) {
            return res.status(401).json({
                message: "Invalid refresh token"
            })
        }
        // after checking we can create accessToken
        const accessToken = jwt.sign(
            {id: decoded.id},
            config.JWT_SECRET,
            {expiresIn: "15m"}
        )


        // whenever we get a new accesstoken
        // it is industry standard to create a new refresh token again
        // so that this scurity cycle can't be compromised
        const newRefreshToken = jwt.sign(
            {id: decoded.id},
            config.JWT_SECRET,
            {expiresIn: "5d"}
        )
        // store this new refresh token to the database (sessionModel)
        const newRefreshTokenHash = crypto.createHash("sha256").update(newRefreshToken).digest("hex");
        
        session.refreshTokenHash = newRefreshTokenHash;
        await session.save(); 

        res.cookie("refreshToken", newRefreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 5 * 24 * 60 * 60 * 1000
        })

        res.status(200).json({
            message: "Access token refreshed successfully",
            accessToken
        })
    } catch (error) {
        res.status(400).json({
            message: `error in refreshing access-token : ${error}`
        })
    }
}

export const logout = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    if(!refreshToken) {
        return res.status(401).json({
            message: "Refresh token not found, user not registered"
        })
    }

    const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex");

    const session = await sessionModel.findOne({
        refreshTokenHash,
        revoked: false
    })

    if(!session) {
        return res.status(401).json({
            message: "Invalid refresh token"
        })
    }

    session.revoked = true;
    await session.save();
    res.clearCookie("refreshToken");

    res.status(200).json({
        message: "Logged out seccessfully"
    })

    /**
     * Now session has been revoked.
     * so the refresh token should not be used again for access token generation.
     * so put a check where access token is being generated. - (in "refreshToken" controller)
     */
}

export const logoutFromAll = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    if(!refreshToken) {
        return res.status(401).json({
            message: "Refresh token not found, user not registered"
        })
    }

    const decoded = jwt.verify(refreshToken, config.JWT_SECRET);

    await sessionModel.updateMany(
        {
            user: decoded.id,
            revoked: false
        },
        {
            revoked: true
        }
    )
   
    res.clearCookie("refreshToken");

    res.status(200).json({
        message: "Logged out from all devices seccessfully"
    })
}