import { useThemeColors } from "../../../hooks/useTheme";
import { Footer } from "../Footer/index.jsx";

export const Layout = ({ children }) => {
  const colors = useThemeColors();

  return (
    <div
      className="layout"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: colors.background,
        color: colors.text,
      }}
    >
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
};
