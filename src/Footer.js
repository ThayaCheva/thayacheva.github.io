import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './css/footer.css';

function Footer(props) {
  return (
    <section id="footer">
        <div className="social-media">
            <a href="https://www.linkedin.com/in/thayacheva/" target="_blank"><FontAwesomeIcon className="icons" icon={faLinkedin}/></a>
            <a href="https://github.com/ThayaCheva" target="_blank"><FontAwesomeIcon className="icons" icon={faGithub}/></a>
            <a onClick={() => {navigator.clipboard.writeText("thayajjj@gmail.com"); props.manageAlert("Copied to clipboard!", "success");}}><FontAwesomeIcon className="icons" icon={faEnvelope} /></a>
        </div>
        <p>Designed and built by Thaya Chevaphatrakul</p>
    </section>
  );
}

export default Footer