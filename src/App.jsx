import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const [underlineStyle, setUnderlineStyle] = useState({
    left: 0,
    width: 0,
  });

  const [hoverStyle, setHoverStyle] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id, element) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setActiveSection(id);

    const rect = element.getBoundingClientRect();
    const parentRect = element.parentElement.getBoundingClientRect();

    setUnderlineStyle({
      left: rect.left - parentRect.left,
      width: rect.width,
    });
  };

  const handleHover = (event) => {
    const target = event.currentTarget;

    setHoverStyle({
      left: target.offsetLeft,
      width: target.offsetWidth,
    });
  };

  const handleLeave = () => {
    setHoverStyle(null);
  };

  return (
    <>
      <Header
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        underlineStyle={underlineStyle}
        hoverStyle={hoverStyle}
        handleHover={handleHover}
        handleLeave={handleLeave}
      />

      <Home />
      <Skills />
      <Education />
      <Projects />
      <Contact />

      <Footer />
    </>
  );
}

export default App;
