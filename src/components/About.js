import '../css/About.css';
import selfie from '../img/selfie.png';
import html5Logo from '../img/html5-logo.png';
import css3Logo from '../img/css3-logo.png';
import jsLogo from '../img/javascript-logo.png';
import reactLogo from '../img/react-logo.png';
import sassLogo from '../img/sass-logo.png';

function About() {
  return (
    <div className="about">
      <p className="header" id="about"><span className="mark">About</span></p>
      
      <div className="about-content">
        <img src={selfie} id="selfie"></img>
        <p className="blurb">
        I have a passion for creating new things and building meaningful 
        projects. The entire process from just having an idea, to having 
        something that I can share with others never gets old.
        Whether it's a web application, crocheted sweater, or a pencil portrait, 
        I've got you. 

        I will be graduating at with my B.A. in IT at York University in 
        June 2022. I'm excited to continue refining my skills
        with the right company.
        </p>
      </div>
      <div className="skills">
        <p className="header">SKILLS</p>
        <img src={html5Logo}></img>
        <img src={css3Logo}></img>
        <img src={jsLogo}></img>
        <img src={reactLogo}></img>
        <img src={sassLogo}></img>
      </div>
    </div>
  );
}
  
  export default About;
  