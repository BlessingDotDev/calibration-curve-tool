// theme/ThemeContext.jsx
import React, { createContext, useState, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const CustomThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(() => ({
    toggleColorMode: () => setMode(prev => (prev === "light" ? "dark" : "light")),
  }), []);

  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
