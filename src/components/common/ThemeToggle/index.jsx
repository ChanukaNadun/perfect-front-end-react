import { useTheme } from "../../../context/ThemeContext";
import MoonIcon from "../../../assets/icons/MoonIcon.png"; 
import SunIcon from "../../../assets/icons/SunIcon.png"; 

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="theme-toggle"
    >
      <img
        src={theme === "light" ? MoonIcon : SunIcon}
        alt={theme === "light" ? "Dark mode" : "Light mode"}
        width="24"
        height="24"
      />
    </button>
  );
};
