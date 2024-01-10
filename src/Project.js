import React from 'react'
import './css/project.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Project() {
    var settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 3,
        speed: 500,
        focusOnSelect: true,
    };
  return (
    <section id="project">
        <div className="title">
            <h1 className="section-header reveal">My <span>Projects</span></h1>
            <p className="section-description reveal">Explore a selection of my diverse past projects, each contributing to my skill set and professional growth.</p>
        </div>
        <div className="project-container reveal">
            <Slider {...settings}>
                <div className="project-item">
                    <div className="project-item-image">
                        <img src={require("./images/lunala.jpg")} alt="project-image"></img>
                    </div>

                </div>
                <div className="project-item">
                    <div className="project-item-image">
                        <img src={require("./images/textdna.png")} alt="project-image"></img>
                    </div>
                    
                </div>
                <div className="project-item">
                    <div className="project-item-image">
                        <img src={require("./images/lastbite.png")} alt="project-image"></img>
                    </div>
                    
                </div>
                <div className="project-item">
                    <div className="project-item-image">
                        <img src={require("./images/abyss.png")} alt="project-image"></img>
                    </div>
                    
                </div>
            </Slider>
            <p className="nav-info">Swipe, click or use arrow keys to navigate.</p>
        </div>
    </section>
  );
}

export default Project