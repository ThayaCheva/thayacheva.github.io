import React from 'react'
import './css/skills.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TypingAnimation = ({ text, speed }) => {
    const [visibleChars, setVisibleChars] = React.useState(0);
    React.useEffect(() => {
        const intervalId = setInterval(() => {
        setVisibleChars((prevVisibleChars) =>
            prevVisibleChars < text.length ? prevVisibleChars + 1 : prevVisibleChars
        );
        }, speed);
    
        return () => clearInterval(intervalId);
    }, [text, speed]);
    return <span>{text.slice(0, visibleChars)}</span>;
};

function Skills() {

    return (
    <section id="skills">
        <h1 className="section-header">My <TypingAnimation text={"Skills"} speed={100}/><span className="cursor">|</span></h1>
        <p>A list of programming languages and software I usually use or am familiar with.</p>
        <div className="skills-container">
            <div className="skills-box reveal">
                <h2>LANGUAGES</h2>
                <div className="skills-items">
                    <p>PYTHON</p>
                    <p>C</p>
                    <p>C#</p>
                    <p>JAVA</p>
                    <p>JAVASCRIPT</p>
                    <p>SQL</p>
                    <p>HASKELL</p>
                </div>
            </div>
            <div className="skills-box reveal">
                <h2>WEB DEV</h2>
                <div className="skills-items"> 
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>SCSS</p>
                    <p>REACT</p>
                    <p>NEXTJS</p>
                </div>
            </div>
            <div className="skills-box reveal">
                <h2>TOOLS</h2>
                <div className="skills-items">
                    <p>PHOTOSHOP</p>
                    <p>AFTER EFFECTS</p>
                    <p>WORD</p>
                    <p>EXCEL</p>
                    <p>ACCESS</p>
                    <p>FIGMA</p>
                    <p>SAI2</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills