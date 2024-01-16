import React from 'react'
import './css/about.css';
import PDF from './files/Thaya_Resume.pdf'
function About() {
  return (
    <section id="about">
        <div className="about-left">
            <div className="about-left-container">
              <div className="title reveal">
                  <h1 className="section-header">About <span>Me</span></h1>
              </div>
              <div className="name-text reveal">
                <p>Hi 👋, my name is <span>THAYA CHEVAPHATRAKUL</span></p>
              </div>
                <p className="reveal">I'm a <span className="text-bold">Computer Science</span> graduate from the University of Melbourne. I have a strong passion for <span className="text-bold">Graphic Design</span> and <span className="text-bold">Front-End Development</span>. I've also developed various software projects, ranging from games to websites.Check out my projects, and feel free to get in touch!</p>
                <button className="reveal">My Resume</button>
            </div>
        </div>
        <div className="about-right-container">
          <div className="about-right">
            <div className="grid-item-container">
              <img className="reveal grid-item" src={require("./images/icons/python-icon.png")}></img>
              <h3>PYTHON</h3>
            </div>
            <div className="grid-item-container">
              <img className="reveal grid-item" src={require("./images/icons/java-icon.png")}></img>
              <h3>JAVA</h3>
              
            </div>
            <div className="grid-item-container">
              <img className="reveal grid-item" src={require("./images/icons/javascript-icon.png")}></img>
              <h3>JAVASCRIPT</h3>
            </div>
            <div className="grid-item-container">
              <img className="reveal grid-item" src={require("./images/icons/c-icon.png")}></img>
              <h3>Contact</h3>
            </div>
            <div className="grid-item-container">
              <img className="reveal grid-item" src={require("./images/icons/c-sharp-icon.png")}></img>
              <h3>C#</h3>

            </div>
            <div className="grid-item-container">
              <img className="reveal grid-item" src={require("./images/icons/haskell-icon.png")}></img>
              <h3>HASKELL</h3>

            </div>
            <div className="grid-item-container">
              <img className="reveal grid-item" src={require("./images/icons/mysql-icon.png")}></img>
              <h3>MYSQL</h3>

            </div>
            <div className="grid-item-container">
              <img className="reveal grid-item" src={require("./images/icons/html-icon.png")}></img>
              <h3>HTML</h3>

            </div>
            <div className="grid-item-container">
              <img className="reveal grid-item" src={require("./images/icons/css-icon.png")}></img>
              <h3>CSS</h3>

            </div>
            <div className="grid-item-container">
              <img className="reveal grid-item" src={require("./images/icons/sass-icon.png")}></img>
              <h3>SASS</h3>

            </div>
            <div className="grid-item-container">
              <img className="reveal grid-item" src={require("./images/icons/react-icon.png")}></img>
              <h3>REACT</h3>

            </div>
            <div className="grid-item-container">
              <img className="reveal grid-item" src={require("./images/icons/node-js-icon.png")}></img>
              <h3>NODEJS</h3>

            </div>
            <div className="grid-item-container">
              <img className="reveal grid-item" src={require("./images/icons/unity-icon.png")}></img>
              <h3>UNITY</h3>

            </div>
            <div className="grid-item-container">
              <img className="reveal grid-item" src={require("./images/icons/photoshop-icon.png")}></img>
              <h3>PHOTOSHOP</h3>

            </div>
            <div className="grid-item-container">
              <img className="reveal grid-item" src={require("./images/icons/after-effects-icon.png")}></img>
              <h3>AFTER EFFECTS</h3>

            </div>
            <div className="grid-item-container">
              <img className="reveal grid-item" src={require("./images/icons/figma-icon.png")}></img>
              <h3>FIGMA</h3>

            </div>
          </div>
        </div>
    </section>
  );
}

export default About