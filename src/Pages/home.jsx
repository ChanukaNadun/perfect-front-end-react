import React from 'react'
import { Navbar } from "./../components/common/Navbar";
import { Card } from "./../components/common/Card";
import { Button } from "./../components/common/Button";
import { TextField } from "./../components/common/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "./../components/common/DropDown";

function Home() {
     const navLinks = [
       { href: "#features", label: "Features" },
       { href: "#pricing", label: "Pricing" },
       { href: "#about", label: "About" },
       { href: "#contact", label: "Contact" },
     ];
  return (
    <div>
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
          {/* Basic usage */}
          <TextField
            id="email"
            label="Email Address"
            placeholder="Enter your email"
            startAdornment={<FontAwesomeIcon icon={faSearch} />}
            endAdornment={<span>@example.com</span>}
          />
          {/* With all props */}
          {/* <TextField
              id="password"
              label="Password"
              type="password"
              variant="filled"
              size="large"
              fullWidth
              error={errors.password}
              helperText={
                errors.password ? "Invalid password" : "Must be 8+ characters"
              }
              startAdornment={<LockIcon />}
              endAdornment={
                <button type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              }
              value={password}
              onChange={handlePasswordChange}
              onBlur={validatePassword}
            /> */}
          <Dropdown
            options={[
              { value: "1", label: "Option 1" },
              { value: "2", label: "Option 2" },
              { value: "3", label: "Option 3" },
            ]}
            // value={selectedValue}
            // onChange={setSelectedValue}
            placeholder="Select an option"
          />
        </section>
      </main>
    </div>
  );
}

export default Home
