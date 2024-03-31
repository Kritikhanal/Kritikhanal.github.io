import "./App.css";
import Layout from "./components/Layout/layout";
import About from "./pages/About/about";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Project from "./pages/Project/Project";
import Techstack from "./pages/TechStack/Techstack";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import MobileNav from "./components/MobileNav/MobileNav";
function App() {
  const [theme] = useTheme();
  return (
    <div className="App">
      <div id={theme}>
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Techstack />
          <Project />
          <Education />
          <Contact />
        </div>
        <div className="footer pb-2 ms-2">
          <h4 className="text-center">Kritima Khanal &copy; 2023</h4>
        </div>
      </div>
      <ScrollToTop smooth color="red" />
    </div>
  );
}

export default App;
