import * as React from "react";

export const contextapi = React.createContext();

export const Myprovider = ({ children }) => {
  return <contextapi.Provider value={{}}>{children}</contextapi.Provider>;
};
