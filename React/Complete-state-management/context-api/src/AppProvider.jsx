import { ContextProvider } from "./MyContext";
import { UserProvider } from "./UserContext";

const AppProvider = ({ children }) => {
  return (
    <ContextProvider>
      <UserProvider>
        {children}
      </UserProvider>
    </ContextProvider>
  );
};

export {AppProvider}