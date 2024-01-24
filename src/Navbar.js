import React from "react";
import "./css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [activeSection, setActiveSection] = React.useState("");
  const [isMobile, setIsMobile] = React.useState(false);
  const [enableNav, setEnableNav] = React.useState(false);
  React.useEffect(() => {
    if (window.innerWidth <= 1024) {
      setIsMobile(true);
    }
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav>
      <h1>thayacheva</h1>
      <div className="nav-menu">
        {!isMobile ? (
          <ul className="nav-menu-container">
            <a
              className={activeSection === "hero" ? "active" : ""}
              href="#hero"
            >
              HOME
            </a>
            <a
              className={activeSection === "about" ? "active" : ""}
              href="#about"
            >
              ABOUT
            </a>
            <a
              className={activeSection === "project" ? "active" : ""}
              href="#project"
            >
              PROJECTS
            </a>
            <a
              className={activeSection === "contact" ? "active" : ""}
              href="#contact"
            >
              CONTACT
            </a>
          </ul>
        ) : (
          <div className="mobile-nav-container">
            <FontAwesomeIcon
              className="icon"
              icon={faBars}
              onClick={() => setEnableNav(true)}
            />
            {enableNav && (
              <ul>
                <button
                  className="close-btn"
                  onClick={() => setEnableNav(false)}
                >
                  X
                </button>
                <a
                  onClick={() => setEnableNav(false)}
                  className="burger-item"
                  href="#hero"
                >
                  HOME
                </a>
                <a
                  onClick={() => setEnableNav(false)}
                  className="burger-item"
                  href="#about"
                >
                  ABOUT
                </a>
                <a
                  onClick={() => setEnableNav(false)}
                  className="burger-item"
                  href="#project"
                >
                  PROJECTS
                </a>
                <a
                  onClick={() => setEnableNav(false)}
                  className="burger-item"
                  href="#contact"
                >
                  CONTACT
                </a>
              </ul>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
