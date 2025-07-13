import { useThemeColors } from "../../../hooks/useTheme";

export const Button = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  fullWidth = false,
  ...props
}) => {
  const colors = useThemeColors();

  const baseStyle = {
    backgroundColor: colors[variant] || colors.primary,
    color: variant === "primary" ? "#fff" : colors.text,
    border: `1px solid ${colors.border}`,
    width: fullWidth ? "100%" : "auto",
  };

  const sizeStyles = {
    small: { padding: "0.5rem 1rem", fontSize: "0.875rem" },
    medium: { padding: "0.75rem 1.5rem", fontSize: "1rem" },
    large: { padding: "1rem 2rem", fontSize: "1.125rem" },
  };

  return (
    <button
      style={{
        ...baseStyle,
        ...sizeStyles[size],
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
