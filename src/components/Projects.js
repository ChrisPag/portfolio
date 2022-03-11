import '../css/Projects.css';
import space from '../img/spacestagram-static.gif';
import spacegif from '../img/spacestagram.gif';
import bakery from '../img/bakery-static.gif';
import bakerygif from '../img/bakery-demo.gif';

function Projects() {
    return (
      <div className="projects">
        <p className="header" id="projects"><span className="mark">Projects</span></p>
        <div className="project-cont">
          <div className="element">
            <img className="static" src={space}></img>
            <img src={spacegif}></img>
            <p>Spacestagram</p>
            <a href="https://github.com/ChrisPag/chrispag.github.io"><p>Learn More</p></a>
            <a href="https://chrispag.github.io/"><p>Live</p></a>
          </div>
          <div className="element" id="bakery">
            <img className="static" src={bakery}></img>
            <img src={bakerygif}></img>
            <p>Bakery Project</p>
            <a href="https://github.com/ChrisPag/bakery-site"><p>Learn More</p></a>
          </div>
          <div className="element">
            <img src={space}></img>
          </div>
        </div>
      </div>
    );
  }
  
  export default Projects;
  