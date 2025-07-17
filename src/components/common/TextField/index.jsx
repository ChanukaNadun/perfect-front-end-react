import React from "react";
import { useThemeColors } from "../../../hooks/useTheme";
import "./TextField.css";

/**
 * A customizable, accessible TextField component with support for icons, validation, and theming.
 *
 * @param {Object} props - Component props
 * @param {string} [props.label] - Label text for the input
 * @param {'outlined'|'filled'|'standard'} [props.variant='outlined'] - Visual style variant
 * @param {'small'|'medium'|'large'} [props.size='medium'] - Size variant
 * @param {boolean} [props.fullWidth=false] - Whether the input should take full width
 * @param {boolean} [props.error=false] - Error state
 * @param {string} [props.helperText] - Helper/error text
 * @param {ReactNode} [props.startAdornment] - Content to display before input (icons, etc.)
 * @param {ReactNode} [props.endAdornment] - Content to display after input (icons, etc.)
 * @param {string} [props.className] - Additional class names
 * @param {string} props.id - Unique ID for the input
 * @param {boolean} [props.disabled] - Disabled state
 * @param {string} [props.placeholder] - Input placeholder
 * @param {string} [props.type='text'] - Input type (text, password, email, etc.)
 * @param {string} [props.value] - Controlled input value
 * @param {function} [props.onChange] - Change handler
 * @param {function} [props.onBlur] - Blur handler
 * @param {function} [props.onFocus] - Focus handler
 * @param {Object} [props.inputProps] - Additional props for the input element
 * @param {React.Ref} [ref] - Ref to forward to the input element
 */
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
    type = "text",
    placeholder,
    value,
    onChange,
    onBlur,
    onFocus,
    inputProps = {},
    ...otherProps
  } = props;

  const colors = useThemeColors();

  // Generate class names using a more readable approach
  const textFieldClasses = [
    "text-field",
    `text-field--${variant}`,
    `text-field--${size}`,
    fullWidth && "text-field--full-width",
    error && "text-field--error",
    disabled && "text-field--disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div {...otherProps} className={textFieldClasses}>
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
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
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

// Prop type validation for better developer experience
// TextField.propTypes = {
//   label: PropTypes.string,
//   variant: PropTypes.oneOf(["outlined", "filled", "standard"]),
//   size: PropTypes.oneOf(["small", "medium", "large"]),
//   fullWidth: PropTypes.bool,
//   error: PropTypes.bool,
//   helperText: PropTypes.string,
//   startAdornment: PropTypes.node,
//   endAdornment: PropTypes.node,
//   className: PropTypes.string,
//   id: PropTypes.string.isRequired,
//   disabled: PropTypes.bool,
//   type: PropTypes.string,
//   placeholder: PropTypes.string,
//   value: PropTypes.string,
//   onChange: PropTypes.func,
//   onBlur: PropTypes.func,
//   onFocus: PropTypes.func,
//   inputProps: PropTypes.object,
// };
