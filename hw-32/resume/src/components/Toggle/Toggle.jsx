import Button from "../Button/Button";
import { useThemeContext } from "../../themeContext";

const Toggle = () => {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <Button title={mode === "light" ? "🌞" : "🌜"} onClick={toggleTheme} />
  );
};

export default Toggle;
