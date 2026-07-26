import mongoose from "mongoose"
import config from "./config.js"


export const connectdb = async () => {
    try {
        await mongoose.connect(config.MONGO_URI)
        console.log("Connection successful")
    } catch (error) {
        console.log("something went wrong : " + error)
    }
   
}