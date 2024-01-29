import React from "react";
import "./css/skills.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Skills() {
  const [skillType, setSkillType] = React.useState("Languages");
  return (
    <section id="skills">
      <div className="skills-container">
        <div className="skills reveal">
          <div className="skills-header">
            <div className="btn-container">
              <div className="tab-btns">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <a>
                <button
                  onClick={() => {
                    setSkillType("Languages");
                  }}
                >
                  Languages
                </button>
              </a>
            </div>
            <div className="btn-container">
              <div className="tab-btns">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <a>
                <button
                  onClick={() => {
                    setSkillType("Web");
                  }}
                >
                  Web Dev
                </button>
              </a>
            </div>
            <div className="btn-container">
              <div className="tab-btns">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <a>
                <button
                  onClick={() => {
                    setSkillType("Tools");
                  }}
                >
                  Tools
                </button>
              </a>
            </div>
          </div>
          {skillType === "Languages" ? (
            <div className="skills-item-container">
              <div className="tab-btns">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="tab-bar">
                <p>about.me/my-skills/languages</p>
              </div>
              <div className="skills-item">
                <img src={require("./images/icons/python-icon.png")} />
                <h4>PYTHON</h4>
              </div>
              <div className="skills-item">
                <img src={require("./images/icons/c-icon.png")} />
                <h4>C</h4>
              </div>
              <div className="skills-item">
                <img src={require("./images/icons/c-sharp-icon.png")} />
                <h4>C#</h4>
              </div>
              <div className="skills-item">
                <img src={require("./images/icons/java-icon.png")} />
                <h4>JAVA</h4>
              </div>
              <div className="skills-item">
                <img src={require("./images/icons/javascript-icon.png")} />
                <h4>JAVASCRIPT</h4>
              </div>
              <div className="skills-item">
                <img src={require("./images/icons/mysql-icon.png")} />
                <h4>MYSQL</h4>
              </div>
              <div className="skills-item">
                <img src={require("./images/icons/haskell-icon.png")} />
                <h4>HASKELL</h4>
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {skillType === "Web" ? (
            <div className="skills-item-container">
              <div className="tab-btns">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="tab-bar">
                <p>about.me/my-skills/web-dev</p>
              </div>
              <div className="skills-item">
                <img src={require("./images/icons/html-icon.png")} />
                <h4>HTML</h4>
              </div>
              <div className="skills-item">
                <img src={require("./images/icons/css-icon.png")} />
                <h4>CSS</h4>
              </div>
              <div className="skills-item">
                <img src={require("./images/icons/sass-icon.png")} />
                <h4>SASS</h4>
              </div>
              <div className="skills-item">
                <img src={require("./images/icons/react-icon.png")} />
                <h4>REACT</h4>
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {skillType === "Tools" ? (
            <div className="skills-item-container">
              <div className="tab-btns">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="tab-bar">
                <p>about.me/my-skills/tools</p>
              </div>
              <div className="skills-item">
                <img src={require("./images/icons/photoshop-icon.png")} />
                <h4>PHOTOSHOP</h4>
              </div>
              <div className="skills-item">
                <img src={require("./images/icons/after-effects-icon.png")} />
                <h4>AFTER EFFECTS</h4>
              </div>
              <div className="skills-item">
                <img src={require("./images/icons/unity-icon.png")} />
                <h4>UNITY</h4>
              </div>
              <div className="skills-item">
                <img src={require("./images/icons/figma-icon.png")} />
                <h4>FIGMA</h4>
              </div>
              <div className="skills-item">
                <img src={require("./images/icons/word-icon.png")} />
                <h4>WORD</h4>
              </div>
              <div className="skills-item">
                <img src={require("./images/icons/excel-icon.png")} />
                <h4>EXCEL</h4>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Skills;
