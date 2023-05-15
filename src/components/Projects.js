import '../css/Projects.css';
import space from '../img/spacestagram-static.gif';
import spacegif from '../img/spacestagram.gif';
import bakery from '../img/bakery-static.gif';
import bakerygif from '../img/bakery-demo.gif';
import versegif from '../img/verse.gif';
import verse from '../img/verse-static.gif';
import moodgrid from '../img/grid.png';
import dishsavvy from '../img/dishsavvy-static.png';
import {FiExternalLink} from 'react-icons/fi';

function Projects() {
  

  return (
    <div className="projects">
      <p className="header" id="projects"><span className="mark">Projects</span></p>
      <div className="project-cont">
        <div className="element">
          <a href="https://github.com/ChrisPag/moodboard-project"><img src={moodgrid} alt="moodscape app"></img></a>
          <p className="projectTitle">Moodscape</p>
          <p>React | Unsplash API</p>
          <p><a href="https://github.com/ChrisPag/moodboard-project"target="_blank" rel="noreferrer">Github <FiExternalLink/></a>
          <a href="https://mood-scape.onrender.com"target="_blank" rel="noreferrer">Live <FiExternalLink/></a></p>
        </div> 

        <div className="element">
          <a href="https://github.com/Piyush-Bhor/CC_SenecaHackathon"><img src={dishsavvy} alt="dishsavvy app"></img></a>
          <p className="projectTitle">DishSavvy</p>
          <p>HTML | CSS | JavaScript | EJS | Node | Express | MongoDB</p>
          <a href="https://github.com/Piyush-Bhor/CC_SenecaHackathon"target="_blank" rel="noreferrer">Github <FiExternalLink/></a>
        </div>

        <div className="element">
          <a href="https://github.com/ChrisPag/chrispag.github.io"><img src={space} alt="spacestagram app"></img></a>
          <p className="projectTitle">Spacestagram</p>
          <p>React | NASA API</p>
          <p><a href="https://github.com/ChrisPag/chrispag.github.io"target="_blank" rel="noreferrer">Github <FiExternalLink/></a>
          <a href="https://chrispag.github.io/"target="_blank" rel="noreferrer">Live <FiExternalLink/></a></p>
        </div>

        <div className="element">
          <a href="https://github.com/Obuya/ACCA"><img src={verse} alt="moodscape app"></img></a>
          <p className="projectTitle">Verse</p>
          <p>React | API | Heroku | Firebase</p>
          <p><a href="https://github.com/Obuya/ACCA"target="_blank" rel="noreferrer">Github <FiExternalLink/></a>
          <a href="https://devpost.com/software/verse-45dnra"target="_blank" rel="noreferrer">DevPost <FiExternalLink/></a></p>
        </div> 
      </div>
    </div>
  );
}
  
  export default Projects;
  