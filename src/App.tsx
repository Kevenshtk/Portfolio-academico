import Header from "./components/Header/index.js";
import Banner from "./components/Banner/index.js";
import About from "./components/About/index.js";
import Skills from "./components/Skills/index.js";
import Projects from "./components/Projects/index.js";
import Contact from "./components/Contact/index.js";
import MusicPlayer from "./components/MusicPlayer/index.js";
import BackToTop from "./components/BackToTop/index.js";

import { ThemeContext } from "./context/themes.js";

import { useState, useEffect } from "react";

import "./styles/app.sass";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-theme" : "light-theme";
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className="app">
        <Header />
        <main>
          <Banner />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <MusicPlayer />
        <BackToTop />
        <div className="background-elements">
          <div className="floating-particles"></div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
