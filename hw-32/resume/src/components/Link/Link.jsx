/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const Link = ({ children, to }) => {
  const theme = useTheme();
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        textDecoration: "none",
        color: isActive
          ? theme.palette.primary.main
          : theme.palette.text.primary, // Колір активного посилання
      })}
    >
      {children}
    </NavLink>
  );
};

export default Link;
