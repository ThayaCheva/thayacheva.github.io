import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './css/footer.css';

function Footer() {
  return (
    <section id="footer">
        <div className="social-media">
            <a href="https://www.linkedin.com/in/thayacheva/" target="_blank"><FontAwesomeIcon className="icons" icon={faLinkedin}/></a>
            <a href="https://github.com/ThayaCheva" target="_blank"><FontAwesomeIcon className="icons" icon={faGithub}/></a>
            <a href="" target="_blank"><FontAwesomeIcon className="icons" icon={faInstagram}/></a>
        </div>
        <p>Thaya Chevaphatrakul ©2023 | <span onClick={() => {navigator.clipboard.writeText("thayajjj@gmail.com")}}>thayajjj@gmail.com</span></p>
    </section>
  );
}

export default Footer