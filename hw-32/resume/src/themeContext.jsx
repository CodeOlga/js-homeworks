/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useState, useContext, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ThemeContext = createContext();

export const ThemeProviderWithToggle = ({ children }) => {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" ? "dark" : "light";
  });

  // Функція для переключення теми
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  // Базові кольори для обох тем
  const customPalette = {
    primary: "#BB86FC",
    secondary: "#03DAC6",
    error: "#B00020",
  };

  // Створюємо тему MUI
  const theme = createTheme({
    palette: {
      mode,
      primary: { main: customPalette.primary },
      secondary: { main: customPalette.secondary },
      error: { main: customPalette.error },
      background: {
        default: mode === "dark" ? "#121212" : "#ffffff",
        paper: mode === "dark" ? "#1E1E1E" : "#f5f5f5",
      },
      text: {
        primary: mode === "dark" ? "#ffffff" : "#000000",
      },
    },
  });

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
