import React from "react";
import { useThemeColors } from "../../../hooks/useTheme";
import "./TextField.css";

export const TextField = React.forwardRef((props, ref) => {
  const {
    label,
    variant = "outlined",
    size = "medium",
    fullWidth = false,
    error = false,
    helperText,
    startAdornment,
    endAdornment,
    className = "",
    id,
    disabled,
    ...inputProps
  } = props;

  const colors = useThemeColors();

  return (
    <div
      className={`text-field ${className} text-field--${variant} text-field--${size} ${
        fullWidth ? "text-field--full-width" : ""
      } ${error ? "text-field--error" : ""} ${
        disabled ? "text-field--disabled" : ""
      }`}
    >
      {label && (
        <label
          htmlFor={id}
          className="text-field__label"
          style={{ color: error ? colors.error : colors.text }}
        >
          {label}
        </label>
      )}
      <div className="text-field__input-container">
        {startAdornment && (
          <div className="text-field__adornment text-field__adornment--start">
            {startAdornment}
          </div>
        )}
        <input
          ref={ref}
          id={id}
          className="text-field__input"
          aria-invalid={error}
          aria-describedby={helperText ? `${id}-helper-text` : undefined}
          disabled={disabled}
          {...inputProps}
        />
        {endAdornment && (
          <div className="text-field__adornment text-field__adornment--end">
            {endAdornment}
          </div>
        )}
      </div>
      {helperText && (
        <p
          id={`${id}-helper-text`}
          className="text-field__helper-text"
          style={{ color: error ? colors.error : colors.textSecondary }}
        >
          {helperText}
        </p>
      )}
    </div>
  );
});

TextField.displayName = "TextField";
