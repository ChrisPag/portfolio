import '../css/Projects.css';
import space from '../img/spacestagram.png'

function Projects() {
    return (
      <div className="projects">
        <p className="header" id="projects"><span className="mark">Projects</span></p>
        <div className="project-cont">
          <img src={space}></img>
          <img src={space}></img>
          <img src={space}></img>
        </div>
      </div>
    );
  }
  
  export default Projects;
  