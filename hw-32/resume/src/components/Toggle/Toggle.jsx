// // import { useContext } from "react";
// // import { ThemeContext, themes } from "../../themeContext";
// import Button from "../Button/Button";

// const Toggle = () => {
//   // const [theme, setTheme] = useContext(ThemeContext);

//   // const handleClick = () => {
//   //   setTheme(theme === themes.light ? themes.dark : themes.light);
//   // };

//   return (
//     <Button
//     // title={theme === themes.light ? "Switch to Dark" : "Switch to Light"}
//     // className="btn btn-outline-primary"
//     // onClick={handleClick}
//     />
//   );
// };

// export default Toggle;

//=========================

// import Button from "../Button/Button";
// import { useThemeContext } from "../../themeContext";

// const Toggle = () => {
//   const { mode, toggleTheme } = useThemeContext();

//   return (
//     <Button
//       title={mode === "light" ? "Switch to Dark" : "Switch to Light"}
//       onClick={toggleTheme}
//     />
//   );
// };

// export default Toggle;

//====
import Button from "../Button/Button";
import { useThemeContext } from "../../themeContext";

const Toggle = () => {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <Button title={mode === "light" ? "🌞" : "🌜"} onClick={toggleTheme} />
  );
};

export default Toggle;
