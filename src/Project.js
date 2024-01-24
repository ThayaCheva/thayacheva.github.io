import React from "react";
import "./css/project.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectItem from "./ProjectItem.js";
export const Context = React.createContext();
function Project() {
  const [showCarousel, setShowCarousel] = React.useState({
    state: false,
    project: "",
  });
  var settings = {
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
  };

  var collageSettings = {
    arrow: false,
  };

  function handleResize() {
    if (window.innerWidth <= 1024) {
      settings = {
        className: "center",
        centerMode: true,
        centerPadding: "0px",
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrow: true,
      };
    }
  }
  handleResize();
  window.addEventListener("resize", handleResize);
  return (
    <section id="project">
      {showCarousel.state && (
        <div className="project-collage">
          <div className="project-collage-container">
            {showCarousel.project === "Lunala and the Celestial Tower" && (
              <Slider settings={collageSettings}>
                <img src={require("./images/lunala.jpg")}></img>
                <img src={require("./images/lunala-imgs/pic-1.png")}></img>
                <img src={require("./images/lunala-imgs/pic-2.png")}></img>
                <img src={require("./images/lunala-imgs/pic-3.png")}></img>
                <img src={require("./images/lunala-imgs/pic-4.png")}></img>
                <img src={require("./images/lunala-imgs/gif-1.gif")}></img>
                <img src={require("./images/lunala-imgs/gif-2.gif")}></img>
              </Slider>
            )}
            {showCarousel.project === "TextDNA" && (
              <Slider settings={collageSettings}>
                <img src={require("./images/textdna.png")}></img>
                <img src={require("./images/textdna-imgs/pic-1.png")}></img>
                <img src={require("./images/textdna-imgs/pic-2.png")}></img>
                <img src={require("./images/textdna-imgs/pic-3.png")}></img>
                <img src={require("./images/textdna-imgs/pic-4.png")}></img>
                <img src={require("./images/textdna-imgs/pic-5.png")}></img>
                <img src={require("./images/textdna-imgs/pic-6.png")}></img>
                <img src={require("./images/textdna-imgs/pic-7.png")}></img>
              </Slider>
            )}
            {showCarousel.project === "LastBite" && (
              <Slider settings={collageSettings}>
                <img src={require("./images/lastbite.png")}></img>
                <img src={require("./images/lastbite-imgs/pic-1.png")}></img>
                <img src={require("./images/lastbite-imgs/pic-2.png")}></img>
                <img src={require("./images/lastbite-imgs/pic-3.png")}></img>
                <img src={require("./images/lastbite-imgs/pic-4.png")}></img>
                <img src={require("./images/lastbite-imgs/pic-5.png")}></img>
              </Slider>
            )}
            {showCarousel.project === "AbyssGuide" && (
              <Slider settings={collageSettings}>
                <img src={require("./images/abyss-imgs/pic-1.png")}></img>
                <img src={require("./images/abyss-imgs/pic-2.png")}></img>
                <img src={require("./images/abyss-imgs/pic-3.png")}></img>
              </Slider>
            )}
          </div>
          <button
            className="close-btn"
            onClick={() => setShowCarousel({ state: false, project: "" })}
          >
            X
          </button>
        </div>
      )}
      <Context.Provider value={[showCarousel, setShowCarousel]}>
        <div className="project-slider-container">
          <Slider {...settings}>
            <ProjectItem
              tabHeader="projects.dev/lunala"
              title="Lunala and the Celestial Tower"
              type="Game Development"
              desc="Lunala and the Celestial Tower is a 2.5D hack and slash RPG made
              with Unity."
              demo="https://comp30019.github.io/project-2-cube-masters/"
              code="https://github.com/ThayaCheva/Lunana-and-Celestial-Tower"
              image="lunala.jpg"
              tech={[
                "unity-icon.png",
                "c-sharp-icon.png",
                "after-effects-icon.png",
                "photoshop-icon.png",
              ]}
            />
            <ProjectItem
              tabHeader="projects.dev/textdna"
              title="TextDNA"
              type="Full-Stack Web Development"
              desc="Designed with academics in mind, our platform offers a
              streamlined solution for evaluating document similarity."
              video="https://youtu.be/6U1lD_LM_7o"
              code="https://github.com/ThayaCheva/TextDNA"
              image="textdna.png"
              tech={[
                "react-icon.png",
                "sass-icon.png",
                "python-icon.png",
                "mysql-icon.png",
                "flask-logo-icon.png",
              ]}
            />
            <ProjectItem
              tabHeader="projects.dev/lastbite"
              title="LastBite"
              type="Full-Stack Web Development"
              desc="MelbourneHack 2nd place winner. A food marketplace that aims
              to address the issue of responsible consumption and
              production."
              video="https://www.youtube.com/watch?v=J-vVu0iHTps"
              code="https://github.com/ThayaCheva/LastBite"
              image="lastbite.png"
              tech={["react-icon.png", "sass-icon.png", "node-js-icon.png"]}
            />
            <ProjectItem
              tabHeader="projects.dev/abyssguide"
              title="AbyssGuide"
              type="Front-End Web Development"
              desc={`A website dedicated to explaining the lore and providing info
              about the show "Made In Abyss".`}
              demo="https://thayacheva.github.io/AbyssGuide"
              code="https://github.com/ThayaCheva/AbyssGuide"
              image="abyss-imgs/pic-1.png"
              tech={["react-icon.png", "sass-icon.png", "node-js-icon.png"]}
            />
          </Slider>
        </div>
      </Context.Provider>

      <p>Swipe or use arrows keys to navigate</p>
    </section>
  );
}

export default Project;
