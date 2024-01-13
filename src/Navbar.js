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
            <li><a className={activeSection === 'about' ? 'active' : ''}href="#about">ABOUT</a></li>
            <li><a className={activeSection === 'skills' ? 'active' : ''}href="#skills">SKILLS</a></li>
            <li><a className={activeSection === 'project' ? 'active' : ''}href="#project">PROJECTS</a></li>
            <li><a className={activeSection === 'contact' ? 'active' : ''}href="#contact">CONTACT</a></li>
            </ul>
      </div>
    </nav>
  );
}

export default Navbar