import React from 'react'
import './css/project.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Project() {
    var settings = {
        dots: true,
        focusOnSelect: true,
        className: "center",
        centerMode: true,
        centerPadding: 0,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false
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
                    <div className="project-item-content">
                        <h3>Lunala and the Celestial Tower</h3>
                        <p>Game Development</p>
                    </div>
                </div>
                <div className="project-item">
                    <div className="project-item-image">
                        <img src={require("./images/textdna.png")} alt="project-image"></img>
                    </div>
                    <div className="project-item-content">
                        <h3>TextDNA</h3>
                        <p>Web Development</p>
                    </div>
                </div>
                <div className="project-item">
                    <div className="project-item-image">
                        <img src={require("./images/lastbite.png")} alt="project-image"></img>
                    </div>
                    <div className="project-item-content">
                        <h3>LastBite</h3>
                        <p>Web Development</p>
                    </div>
                </div>
                <div className="project-item">
                    <div className="project-item-image">
                        <img src={require("./images/abyss.png")} alt="project-image"></img>
                    </div>
                    <div className="project-item-content">
                        <h3>Abyss Guide</h3>
                        <p>Web Development</p>
                    </div>
                </div>
            </Slider>
            
        </div>
    </section>
  );
}

export default Project