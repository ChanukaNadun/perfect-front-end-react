import React, { useState, useRef, useEffect } from 'react';
import { useThemeColors } from '../../../hooks/useTheme';
import './Dropdown.css';

export const Dropdown = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  disabled = false,
  searchable = false,
  clearable = false,
  className = '',
  label,
  error,
  helperText,
  size = 'medium',
  variant = 'outlined',
}) => {
  const colors = useThemeColors();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);

  const filteredOptions = searchable
    ? options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  const selectedOption = options.find(option => option.value === value);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      if (!isOpen) {
        setSearchTerm('');
      }
    }
  };

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
    setSearchTerm('');
  };

  const handleClear = (e) => {
    e.stopPropagation();
    onChange(null);
  };

  return (
    <div
      className={`dropdown ${className} dropdown--${size} dropdown--${variant} ${
        disabled ? 'dropdown--disabled' : ''
      } ${error ? 'dropdown--error' : ''}`}
      ref={dropdownRef}
    >
      {label && (
        <label
          className="dropdown__label"
          style={{ color: error ? colors.error : colors.text }}
        >
          {label}
        </label>
      )}

      <div
        className={`dropdown__trigger ${isOpen ? 'dropdown__trigger--active' : ''}`}
        onClick={toggleDropdown}
        style={{
          backgroundColor: colors.cardBg,
          borderColor: error ? colors.error : colors.border,
          color: colors.text,
        }}
      >
        <div className="dropdown__selected-value">
          {selectedOption ? (
            <span>{selectedOption.label}</span>
          ) : (
            <span className="dropdown__placeholder">{placeholder}</span>
          )}
        </div>

        <div className="dropdown__indicators">
          {clearable && value && (
            <button
              className="dropdown__clear"
              onClick={handleClear}
              aria-label="Clear selection"
            >
              ×
            </button>
          )}
          <span className="dropdown__arrow">▾</span>
        </div>
      </div>

      {isOpen && (
        <div
          className="dropdown__menu"
          style={{
            backgroundColor: colors.cardBg,
            borderColor: colors.border,
          }}
        >
          {searchable && (
            <div className="dropdown__search">
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search..."
                autoFocus
                style={{
                  color: colors.text,
                  backgroundColor: colors.cardBg,
                }}
              />
            </div>
          )}

          <ul className="dropdown__options">
            {filteredOptions.length > 0 ? (
              filteredOptions.map(option => (
                <li
                  key={option.value}
                  className={`dropdown__option ${
                    value === option.value ? 'dropdown__option--selected' : ''
                  }`}
                  onClick={() => handleSelect(option.value)}
                  style={{
                    backgroundColor:
                      value === option.value ? colors.primary : 'transparent',
                    color: value === option.value ? '#fff' : colors.text,
                  }}
                >
                  {option.label}
                </li>
              ))
            ) : (
              <li className="dropdown__no-options">No options found</li>
            )}
          </ul>
        </div>
      )}

      {helperText && (
        <div
          className="dropdown__helper-text"
          style={{ color: error ? colors.error : colors.textSecondary }}
        >
          {helperText}
        </div>
      )}
    </div>
  );
};