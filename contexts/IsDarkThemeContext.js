import React from "react";
const IsDarkThemeContext = React.createContext({
  isDarkTheme: false,
  setIsDarkTheme: () => {},
});
export const IsDarkThemeProvider = IsDarkThemeContext.Provider;
export default IsDarkThemeContext;
