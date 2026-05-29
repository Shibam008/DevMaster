
import { createContext, useContext, useState } from "react";

//* 1. create context
const MyContext = createContext();


//* 2. provide context
const ContextProvider = ({children}) => {

    const [count, setCount] = useState(0);

    const value = {
        count,
        setCount
    }

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )
}

//* 3. use context
const useMyContext = () => {
    return useContext(MyContext);
}


export {useMyContext, ContextProvider}


















