import React from 'react'
import './css/project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


function Project() {    
  return (
    <section id="project">
        <div className="title">
            <h1 className="section-header reveal">My <span>Projects</span></h1>
            <p className="section-description reveal">Explore a selection of my diverse past projects, each contributing to my skill set and professional growth.</p>
        </div>
        <div className="project-container">
            <div className="project-items reveal">
                <div className="project-content">
                    <h2>LUNALA AND THE CELESTIAL TOWER</h2>
                    <h3>Game Development</h3>
                    <p>A 2.5D Hack & Slash Game. Defeat enemies, acquire upgrades and ascend the Celestial Tower and defeat the Moon Lord.</p>
                    <div className="tech">
                        <p>TECH: </p>
                        <img className="grid-item" alt="unity" src={require("./images/icons/unity-icon.png")}></img>
                        <img className="grid-item" src={require("./images/icons/c-sharp-icon.png")}></img>
                    </div>
                    <div className="btn-container">
                        <button><FontAwesomeIcon className="icon" icon={faLaptopCode}/>DEMO</button>
                        <button><FontAwesomeIcon className="icon" icon={faGithub}/> CODE</button>
                    </div>
                </div>
                <img src={require("./images/lunala.jpg")}></img>
            </div>
            <div className="project-items-grid">
                <div className="project-items reveal">
                    <img src={require("./images/textdna.png")}></img>
                    <div className="project-content">
                        <h2>TextDNA</h2>
                        <h3>Full-Stack Web Development</h3>
                        <p>Designed with academics in mind, our platform offers a streamlined solution for evaluating document similarity.</p>
                        <div className="tech">
                            <p>TECH: </p>
                            <img className="grid-item" src={require("./images/icons/react-icon.png")}></img>
                            <img className="grid-item" src={require("./images/icons/sass-icon.png")}></img>
                            <img className="grid-item" src={require("./images/icons/python-icon.png")}></img>
                            <img className="grid-item" src={require("./images/icons/mysql-icon.png")}></img>
                        </div>
                        <div className="btn-container">
                        <button><FontAwesomeIcon className="icon" icon={faLaptopCode}/>DEMO</button>
                        <button><FontAwesomeIcon className="icon" icon={faGithub}/> CODE</button>
                    </div>
                    </div>
                </div>
                <div className="project-items reveal">
                    <img src={require("./images/lastbite.png")}></img>
                    <div className="project-content">
                        <h2>LastBite</h2>
                        <h3>Full-Stack Web Development</h3>
                        <p>MelbourneHack 2nd place winner. A food marketplace that aims to address the issue of responsible consumption and production.</p>
                        <div className="tech">
                            <p>TECH: </p>
                            <img className="grid-item" src={require("./images/icons/react-icon.png")}></img>
                            <img className="grid-item" src={require("./images/icons/sass-icon.png")}></img>
                        </div>
                        <div className="btn-container">
                        <button><FontAwesomeIcon className="icon" icon={faLaptopCode}/>DEMO</button>
                        <button><FontAwesomeIcon className="icon" icon={faGithub}/> CODE</button>
                    </div>
                    </div>
                </div>
            </div>
        
        </div>
    </section>
  );
}

export default Project