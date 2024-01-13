import './App.css';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
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

  function revealAction() {
    var reveals = document.querySelectorAll(".alert");
    reveals[0].classList.add("alert-reveal");
    setTimeout(function () {
      reveals[0].classList.remove("alert-reveal");
    }, 2000);
  }

  function manageAlert(text, type) {
    setAlertValue({ text: text, type: type });
    revealAction(); 
  }

  const [alertValue, setAlertValue] = React.useState({ text: "", type: "" });
  return (
    <div className="App">
      <div className={`alert`}>
        <div className={`${alertValue.type}`}>
          {alertValue.text}{" "}
          {alertValue.type == "success" ? (
            <FontAwesomeIcon icon={faCheck} />
          ) : (
            <FontAwesomeIcon icon={faXmark} />
          )}
        </div>
      </div>

      <Navbar/>
      <Hero manageAlert={manageAlert}/>
      <About/>
      <Skills/>
      <Project/>
      <Contact manageAlert={manageAlert}/>
      <Footer manageAlert={manageAlert}/>
    </div>
  );
}

export default App;
