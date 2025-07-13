import { useThemeColors } from "../../../hooks/useTheme";

export const Card = ({
  children,
  title,
  footer,
  hoverEffect = false,
  className = "",
}) => {
  const colors = useThemeColors();

  return (
    <div
      className={`card ${className}`}
      style={{
        backgroundColor: colors.cardBg,
        border: `1px solid ${colors.border}`,
        color: colors.text,
        transition: hoverEffect ? "transform 0.2s, box-shadow 0.2s" : "none",
      }}
    >
      {title && (
        <div className="card-header">
          <h3>{title}</h3>
        </div>
      )}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};
