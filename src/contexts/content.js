import React, { createContext } from "react";

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  return <ContentContext.Provider value={{}}>{children}</ContentContext.Provider>;
};

export default ContentContext;
