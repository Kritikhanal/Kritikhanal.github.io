import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Kritima CV.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Home = () => {
  const [theme, setTheme] = useTheme();
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="conatiner-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
        </div>
        <div className="container home-content">
          <h2 className="home-title">Hi I'm a </h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "FullStack Developer !",
                  "Mern Stack Developer !",
                  "React Developer !",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-buttons">
            <button className="btn btn-hire">Hire Me</button>

            <a href={Resume} download="Kritima CV.pdf" className="btn btn-cv">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
