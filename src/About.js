import React from "react";
import "./css/about.css";
function About() {
  return (
    <section id="about">
      <div className="about-container website-styling">
        <div className="about-me reveal">
          <div className="tab-btns">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="tab-bar">
            <p>about.me</p>
          </div>
          <h1 className="reveal">Get to Know Me!</h1>
          <p className="reveal">
            {" "}
            I really enjoy working on Front-End design and development but I
            also like to branch out and learn new things as well. I've worked on
            all sorts of projects, from video games to websites. Check 'em out,
          </p>
          <div className="about-list">
            <ul>
              <p className="reveal">🏛️Education: University of Melbourne</p>
              <p className="reveal">
                👩🏻‍🎓Degree: Computer Science, Bachelor of Science
              </p>
              <p className="reveal">🌍Nationality: Thai</p>
            </ul>
          </div>
          <p>
            I'm looking for opportunities to apply my skills in a professional
            setting and continue to learn and grow as a programmer. So get in
            touch!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
