import '../css/Projects.css';
import space from '../img/spacestagram-static.gif';
import spacegif from '../img/spacestagram.gif';
import bakery from '../img/bakery-static.gif';
import bakerygif from '../img/bakery-demo.gif';
import versegif from '../img/verse.gif';
import verse from '../img/verse-static.gif';
import moodscape from '../img/moodscape-static.png';
import {FiExternalLink} from 'react-icons/fi';

function Projects() {
    return (
      <div className="projects">
        <p className="header" id="projects"><span className="mark">Projects</span></p>
        <div className="project-cont">
          <div className="element">
            <a href="https://github.com/ChrisPag/chrispag.github.io"><img className="static" src={space} alt="spacestagram app"></img>
            <img className="gif" src={spacegif} alt="spacestagram app gif"></img></a>
            <p className="projectTitle">Spacestagram</p>
            <p>React | API</p>
            <p><a href="https://github.com/ChrisPag/chrispag.github.io"target="_blank" rel="noreferrer">Github <FiExternalLink/></a>
            <a href="https://chrispag.github.io/"target="_blank" rel="noreferrer">Live <FiExternalLink/></a></p>
          </div>
          <div className="element">
            <a href="https://github.com/ChrisPag/bakery-site"><img className="static" src={bakery} alt="smitty's sweets app"></img>
            <img className="gif" src={bakerygif} alt="smitty's sweets app gif"></img></a>
            <p className="projectTitle">Bakery Project</p>
            <p>React | SASS</p>
            <a href="https://github.com/ChrisPag/bakery-site"target="_blank" rel="noreferrer">Github <FiExternalLink/></a>
          </div>

          <div className="element">
            <a href="https://github.com/Obuya/ACCA"><img className="static" src={verse} alt="moodscape app"></img>
            <img className="gif" src={versegif} alt="moodscape app gif"></img></a>
            <p className="projectTitle">Verse</p>
            <p>React | API | Heroku | Firebase</p>
            <p><a href="https://github.com/Obuya/ACCA"target="_blank" rel="noreferrer">Github <FiExternalLink/></a>
            <a href="https://devpost.com/software/verse-45dnra"target="_blank" rel="noreferrer">DevPost <FiExternalLink/></a></p>
          </div>

          <div className="element">
            <a href="https://github.com/ChrisPag/moodboard-project"><img src={moodscape} alt="moodscape app"></img></a>
            <p className="projectTitle">Moodscape - Coming Soon: Stay Tuned!</p>
            <p>React | API</p>
            <a href="https://github.com/ChrisPag/moodboard-project"target="_blank" rel="noreferrer">Github <FiExternalLink/></a>
          </div>  
        </div>
      </div>
    );
  }
  
  export default Projects;
  