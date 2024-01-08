import './App.css';
import Navbar from './Navbar.js'
import Hero from './Hero.js'
import About from './About.js'
import Skills from './Skills.js'
import Project from './Project.js'
import Contact from './Contact.js'
import Footer from './Footer.js'

function App() {
  window.addEventListener('scroll', reveal);

  function reveal() {
    var reveals = document.querySelectorAll('.reveal')

    for (var i = 0; i < reveals.length; i++) {
      var windowheight = window.innerHeight
      var revealtop = reveals[i].getBoundingClientRect().top
      var revealpoint = 150

      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add('active')
      }
    }
  }
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
