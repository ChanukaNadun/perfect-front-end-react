import { useThemeColors } from "../../../hooks/useTheme";

export const Footer = () => {
  const colors = useThemeColors();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: colors.cardBg,
        borderTop: `1px solid ${colors.border}`,
        padding: "2rem 0",
        marginTop: "3rem",
      }}
    >
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>YourBrand</h3>
            <p>© {currentYear} All rights reserved</p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Product</h4>
              <ul>
                <li>
                  <a href="/">Features</a>
                </li>
                <li>
                  <a href="/">Pricing</a>
                </li>
                <li>
                  <a href="/">Documentation</a>
                </li>
              </ul>
            </div>

            <div className="link-group">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Careers</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>

            <div className="link-group">
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="/">Privacy</a>
                </li>
                <li>
                  <a href="/">Terms</a>
                </li>
                <li>
                  <a href="/">Cookies</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
