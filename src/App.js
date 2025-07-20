import { ThemeProvider } from "./context/ThemeContext";
import { Layout } from "./components/layout/Layout";
import "./App.css"
import Home from "./Pages/home";

const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
