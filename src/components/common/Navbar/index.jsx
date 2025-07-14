import { useState, useEffect } from "react";
import { useThemeColors } from "../../../hooks/useTheme";
import { Button } from "../Button";
import { ThemeToggle } from "../ThemeToggle";
import MenuIcon from "../../../assets/icons/MenuIcon.png"; 
import CloseIcon from "../../../assets/icons/CloseIcon.png"; 
import "./Navbar.css";

export const Navbar = ({ links = [] }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const colors = useThemeColors();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        backgroundColor: isScrolled ? colors.cardBg : "transparent",
        boxShadow: isScrolled ? `0 2px 10px ${colors.border}` : "none",
        color: colors.text,
      }}
      data-theme={colors.mode}
      // className={`navbar ${isScrolled ? "scrolled" : ""}`}
    >
      <div className="nav-container">
        <div className="nav-brand" style={{ color: colors.text }}>
          YourLogo
        </div>

        <div className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href} style={{ color: colors.text }}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <ThemeToggle />
          <Button variant="secondary">Sign Up</Button>
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <img
            src={isMobileMenuOpen ? CloseIcon : MenuIcon}
            alt={isMobileMenuOpen ? "Close menu" : "Open menu"}
            width="24"
            height="24"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}
          style={{
            backgroundColor: colors.cardBg,
            color: colors.text,
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ color: colors.text }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mobile-actions">
            <ThemeToggle />
            <Button variant="secondary" fullWidth>
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
