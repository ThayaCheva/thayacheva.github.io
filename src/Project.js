import React from 'react'
import './css/project.css';
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
                    <h2>Lunala and the Celestial Tower</h2>
                    <h3>Game Development</h3>
                    <p>Defeat enemies, acquire upgrades and ascend the Celestial Tower and defeat the Moon Lord.</p>
                    <div className="btn-container">
                        <button>DEMO</button>
                        <button>CODE</button>
                    </div>
                </div>
                <img src={require("./images/lunala.jpg")}></img>
            </div>
            <div className="project-items reveal">
                <div className="project-content">
                    <h2>TextDNA</h2>
                    <h3>Full-Stack Web Development</h3>
                    <p>Designed with academics in mind, our platform offers a streamlined solution for evaluating document similarity.</p>
                    <div className="btn-container">
                        <button>DEMO</button>
                        <button>CODE</button>
                    </div>
                </div>
                <img src={require("./images/textdna.png")}></img>
            </div>
            <div className="project-items reveal">
                <div className="project-content">
                    <h2>LastBite</h2>
                    <h3>Full-Stack Web Development</h3>
                    <p>MelbourneHack 2nd place winner. A food marketplace that aims to address the issue of responsible consumption and production.</p>
                    <div className="btn-container">
                        <button>DEMO</button>
                        <button>CODE</button>
                    </div>
                </div>
                <img src={require("./images/lastbite.png")}></img>
            </div>
            <div className="project-items reveal">
                <div className="project-content">
                    <h2>Abyss Guide</h2>
                    <h3>Front-End Web Development</h3>
                    <p>A website dedicated to explaining the lore and providing news on the anime "Made in Abyss"</p>
                    <div className="btn-container">
                        <button>DEMO</button>
                        <button>CODE</button>
                    </div>
                </div>
                <img src={require("./images/abyss.png")}></img>
            </div>
        </div>
    </section>
  );
}

export default Project