function Header({
  activeSection,
  scrollToSection,
  underlineStyle,
  hoverStyle,
  handleHover,
  handleLeave,
}) {
  const style = hoverStyle ?? underlineStyle;

  return (
    <header id="header">
      <h6>PAY.dav</h6>
      <nav className="nav" onMouseLeave={handleLeave}>
        <button
          className={activeSection === "hero" ? "active" : ""}
          onClick={(e) => scrollToSection("hero", e.currentTarget)}
          onMouseEnter={handleHover}
        >
          Home
        </button>

        <button
          className={activeSection === "skills" ? "active" : ""}
          onClick={(e) => scrollToSection("skills", e.currentTarget)}
          onMouseEnter={handleHover}
        >
          Skills
        </button>

        <button
          className={activeSection === "education" ? "active" : ""}
          onClick={(e) => scrollToSection("education", e.currentTarget)}
          onMouseEnter={handleHover}
        >
          experience
        </button>

        <button
          className={activeSection === "projects" ? "active" : ""}
          onClick={(e) => scrollToSection("projects", e.currentTarget)}
          onMouseEnter={handleHover}
        >
          projects
        </button>

        <button
          className={activeSection === "contact" ? "active" : ""}
          onClick={(e) => scrollToSection("contact", e.currentTarget)}
          onMouseEnter={handleHover}
        >
          contact
        </button>

        <div
          className="underline"
          style={{
            left: `${style.left}px`,
            width: style.width,
          }}
        />
      </nav>
    </header>
  );
}

export default Header;
