import '../css/Projects.css';
import space from '../img/spacestagram-static.gif';
import spacegif from '../img/spacestagram.gif';
import bakery from '../img/bakery-static.gif';
import bakerygif from '../img/bakery-demo.gif';
import versegif from '../img/verse.gif';
import verse from '../img/verse-static.gif';
import magnamarket from '../img/magnamarket.png';
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
          <p><a href="https://github.com/Piyush-Bhor/CC_SenecaHackathon"target="_blank" rel="noreferrer">Github <FiExternalLink/></a></p>
        </div>

        <div className="element">
          <a href="https://github.com/ChrisPag/chrispag.github.io"><img src={space} alt="spacestagram app"></img></a>
          <p className="projectTitle">Spacestagram</p>
          <p>React | NASA API</p>
          <p><a href="https://github.com/ChrisPag/chrispag.github.io"target="_blank" rel="noreferrer">Github <FiExternalLink/></a>
          <a href="https://chrispag.github.io/"target="_blank" rel="noreferrer">Live <FiExternalLink/></a></p>
        </div>

        <div className="element">
          <a href="https://magnamarket.onrender.com/"><img src={magnamarket} alt="magnamarket website"></img></a>
          <p className="projectTitle">Magna Market</p>
          <p>HTML | CSS | JavaScript</p>
          <p><a href="https://github.com/ChrisPag/magnamarket"target="_blank" rel="noreferrer">Github <FiExternalLink/></a>
          <a href="https://magnamarket.onrender.com/"target="_blank" rel="noreferrer">Live <FiExternalLink/></a></p>
        </div> 
      </div>
    </div>
  );
}
  
  export default Projects;
  