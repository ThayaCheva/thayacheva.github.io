import React from 'react'
import './css/about.css';
import PDF from './files/Thaya_Resume.pdf'
function About() {
  return (
    <section id="about">
        <div className="about-left">
            <div className="about-left-container">
                <h2>THAYA CHEVAPHATRAKUL</h2>
                <p>Hi! I'm a <span className="text-bold">Computing and Software Systems</span> student at the University of Melbourne from Thailand. I possess a strong passion for <span className="text-bold">graphic design</span> and <span className="text-bold">front-end development</span>. I've also developed various software projects, ranging from games to websites. Please check out my projects, and feel free to get in touch!</p>
                  <a href={PDF} target="_blank">
                    <button>MY RESUME</button>
                  </a>
            </div>
        </div>
        <div className="about-right"></div>
    </section>
  );
}

export default About