/* eslint-disable react/prop-types */
// import { useContext } from "react";
// import { ThemeContext } from "../../themeContext";
import { NavLink } from "react-router-dom";

const Link = ({ children, href }) => {
  // const [theme] = useContext(ThemeContext);

  return (
    // <NavLink to={href} style={{ color: theme.color }}>
    //   {children}
    // </NavLink>
    <NavLink to={href}>{children}</NavLink>
  );
};

export default Link;
