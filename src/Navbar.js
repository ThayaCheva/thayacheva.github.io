import React from 'react'
import './css/navbar.css';
function Navbar() {
  const [activeSection, setActiveSection] = React.useState('');
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = ''
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  return (
    <nav>
      <div className="nav-menu">
            <ul className="nav-menu-container">
              <a className={activeSection === 'hero' ? 'active' : ''}href="#hero">HOME</a>
              <a className={activeSection === 'about' ? 'active' : ''}href="#about">ABOUT</a>
              <a className={activeSection === 'project' ? 'active' : ''}href="#project">PROJECTS</a>
              <a className={activeSection === 'contact' ? 'active' : ''}href="#contact">CONTACT</a>
            </ul>
      </div>
    </nav>
  );
}

export default Navbar