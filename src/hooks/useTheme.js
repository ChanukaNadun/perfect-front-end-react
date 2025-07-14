import { useTheme } from "../context/ThemeContext";

export const useThemeColors = () => {
  const { theme } = useTheme();

  const colors = {
    light: {
      primary: "#3a86ff",
      secondary: "#8338ec",
      background: "#f8f9fa",
      text: "#212529",
      cardBg: "#ffffff",
      border: "#dee2e6",
    },
    dark: {
      primary: "#4cc9f0",
      secondary: "#f72585",
      background: "#121212",
      text: "#ffffff",
      cardBg: "#1e1e1e",
      border: "#2d2d2d",
    },
  };

  return colors[theme];
};
