import { createContext } from "react";

export const themes = {
  light: {
    color: "#222831",
    backgroundColor: "#ffffff",
  },
  dark: {
    color: "#ffffff",
    backgroundColor: "#222831",
  },
};

export const ThemeContext = createContext();
