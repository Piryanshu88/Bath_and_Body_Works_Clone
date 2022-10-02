import React from "react";

export const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [isAuth, setAuth] = React.useState(false);
  const [token, setToken] = React.useState("");

  const handleQuery = (username) => {
    if (username != "") {
      setAuth(true);
        setToken(username);
    }
    
  };
  const value = { isAuth, token, handleQuery };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContextProvider };
