import { createContext, useContext, useState } from "react";

const userContext = createContext();

const UserProvider = ({ children }) => {
  const [name, setName] = useState("John");

  const value = {
    name,
    setName,
  };

  return ( 
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    );
};

const useUserContext = () => {
    return useContext(userContext);
}

export {useUserContext, UserProvider}