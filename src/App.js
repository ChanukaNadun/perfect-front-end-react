import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/common/Navbar";
import { Card } from "./components/common/Card";
import { Button } from "./components/common/Button";
import { Layout } from "./components/layout/Layout";
import "./App.css"
import { TextField } from "./components/common/TextField";

const App = () => {
  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <ThemeProvider>
      <Layout>
        <Navbar links={navLinks} />
        <main>
          <section className="hero">
            <Card hoverEffect>
              <h1>Welcome to Our App</h1>
              <p>
                Experience the perfect blend of dark and light modes with our
                responsive components.
              </p>
              <div className="hero-actions">
                <Button size="large">Get Started</Button>
                <Button variant="secondary" size="large">
                  Learn More
                </Button>
              </div>
            </Card>
          </section>

          <section className="features">
            <h2>Features</h2>
            <div className="feature-grid">
              {[1, 2, 3].map((item) => (
                <Card key={item} title={`Feature ${item}`}>
                  <p>
                    This is an amazing feature that works in both light and dark
                    modes.
                  </p>
                  <Button>Try it</Button>
                </Card>
              ))}
            </div>
          </section>

          <section className="features">
            <h2>TextFields</h2>
            {/*  Basic usage */}
            <TextField label="Email" id="email" />
            {/* With error state */}
            <TextField
              label="Password"
              id="password"
              type="password"
              error
              helperText="Password must be 8 characters"
            />
            {/* With icons */}
            <TextField
              label="Search"
              id="search"
              // startAdornment={<SearchIcon />}
            />
            {/* Full width disabled field */}
            <TextField label="Username" id="username" fullWidth disabled />
          </section>
        </main>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
