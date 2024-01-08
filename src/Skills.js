import React from 'react'
import './css/skills.css';
function Skills() {
  return (
    <section id="skills">
        <h1 className="section-header">My <span>Skills</span></h1>
        <p>A list of programming languages and software I usually use or am familiar with</p>
        <div className="skills-container">
            <div className="skills-item skills-languages">
                <h1 className="skills-header">LANGUAGES</h1>
                <div className="skills-item-container">
                    <p>PYTHON</p>
                    <p>C</p>
                    <p>C#</p>
                    <p>JAVA</p>
                    <p>JAVASCRIPT</p>
                    <p>HASKELL</p>
                    <p>SQL</p>
                </div>
            </div>
            <div className="skills-item skills-webdev">
                <h1 className="skills-header">WEB DEV</h1>
                <div className="skills-item-container">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>SCSS</p>
                    <p>REACT</p>
                    <p>NODEJS</p>
                </div>
            </div>
            <div className="skills-item skills-tools">
                <h1 className="skills-header">TOOLS</h1>
                <div className="skills-item-container">
                    <p>PHOTOSHOP</p>
                    <p>AFTER EFFECTS</p>
                    <p>UNITY</p>
                    <p>FIGMA</p>
                    <p>WORD</p>
                    <p>EXCEL</p>
                    <p>ACCESS</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills