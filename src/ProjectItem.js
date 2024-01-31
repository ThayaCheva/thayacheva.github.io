import React from "react";
import "./css/project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faEye } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Context } from "./Project";
function ProjectItem(props) {
  const [showCarousel, setShowCarousel] = React.useContext(Context);
  return (
    <div className="project-container">
      <div className="project-items">
        <div className="tab-btns">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="tab-bar">
          <p>{props.tabHeader}</p>
        </div>
        <div className="project-img-container">
          <div
            className="img-text"
            onClick={() =>
              setShowCarousel({ state: true, project: props.title })
            }
          >
            <h3>
              <FontAwesomeIcon icon={faEye} />
              View More
            </h3>
          </div>
          <img
            className="project-img"
            src={require("./images/" + props.image)}
          ></img>
        </div>
        <div className="project-content">
          <h2>{props.title}</h2>
          <h3>{props.type}</h3>
          <p>{props.desc}</p>
          <div className="tech">
            <p>TECH: </p>
            {props.tech.map((icon) => (
              <img
                className="grid-item"
                alt="unity"
                src={require("./images/icons/" + icon)}
              ></img>
            ))}
          </div>
          <div className="btn-container">
            {props.video && (
              <a href="https://youtu.be/6U1lD_LM_7o" target="_blank">
                <button>
                  <FontAwesomeIcon className="icon" icon={faYoutube} />
                  VIDEO
                </button>
              </a>
            )}
            {props.demo && (
              <a href={props.demo} target="_blank">
                <button>
                  <FontAwesomeIcon className="icon" icon={faLaptopCode} />
                  DEMO
                </button>
              </a>
            )}
            <a href={props.code} target="_blank">
              <button>
                <FontAwesomeIcon className="icon" icon={faGithub} /> CODE
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
