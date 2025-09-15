import { ThemeProvider } from "./context/ThemeContext";
import "./App.css"
import Router from "./router/router";



const App = () => {
  return (
    <ThemeProvider>
        <Router />
    </ThemeProvider>
  );
};

export default App;
