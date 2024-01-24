import React from "react";
import "./css/hero.css";
import PDF from "./files/Thaya_Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
function Hero() {
  return (
    <section id="hero">
      <div className="hero-container website-styling">
        <div className="tab-btns">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="tab-bar">
          <p>porfolio.info</p>
        </div>
        <div className="header">
          <h3>Front-End Developer</h3>
          <h1>Hi 👋, I'm Thaya Chevaphatrakul</h1>
          <p>
            A Passionate Front-End Web Developer that loves to create a unique
            website/application that is both stunning and interactive.
          </p>
          <a href={PDF} target="_blank">
            <button>
              <FontAwesomeIcon icon={faDownload} /> MY RESUME
            </button>
          </a>
          <div className="scroll-icon"></div>
        </div>
      </div>
      <div className="scroll-icon">
        <p>Scroll Down</p>
        <div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
