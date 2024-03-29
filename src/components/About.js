import '../css/About.css';
import selfie from '../img/selfie.png';
import html5Logo from '../img/html5-logo.png';
import css3Logo from '../img/css3-logo.png';
import jsLogo from '../img/javascript-logo.png';
import reactLogo from '../img/react-logo.png';
import expressLogo from '../img/expressjs-logo.png';
import restLogo from '../img/rest-logo.png';
import nodeLogo from '../img/node-logo.png';
import mongoLogo from '../img/mongodb-logo.png';

function About() {
  return (
    <div className="about">
      <p className="header" id="about"><span className="mark">About</span></p>
      
      <div className="about-content"> 
        <img alt="selfie" src={selfie} id="selfie"></img>
        
        <div className="blurb">
          <p>
          Hi again! I'm Christina, a passionate web developer 
          aspiring to help bring your vision to life. I have a knack for 
          creating meaningful and effective web applications to fit whatever
          it is you need to drive your vision forward. 
          </p> 
          <p>
          I recently finished up my B.A. in IT at York University in June 2022.
          I am currently completing a one year graduate certificate in Computer Applications 
          Development (Co-op Stream) at Conestoga College and I expect to graduate in December 2023.
          </p>
          <p>
          As a result of my studies as well as my personal projects, I have 
          accumulated a strong understanding of various web technologies. 
          I'm excited to keep refining my skills and apply
          myself full time in a 4 month developer co-op position.
          </p>
          <p id="hobbies">
            {/*The entire process from just having an idea, to having 
          something that I can share with others never gets old.
          
            Other than coding, I enjoy crocheting, drawing portraits, and
            playing on my Switch (Animal Crossing and Pokemon games are my 
            favourite!).*/}
          </p>
        </div>
      </div>

      <p className="header">SKILLS</p>
      <div className="skills">
        <div>
          <img alt="html5 logo"src={html5Logo}></img>
          <p>HTML</p>
        </div>
        <div>
          <img alt="css3 logo" src={css3Logo}></img>
          <p>CSS</p>
        </div>
        <div>
          <img alt="javascript logo" src={jsLogo}></img>
          <p>JavaScript</p>
        </div>
        <div>
          <img alt="react logo" src={reactLogo}></img>
          <p>React</p>
        </div>
        <div>
          <img alt="api logo" src={restLogo}></img>
          <p>REST APIs</p>
        </div>
        <div>
          <img alt="mongo logo" src={mongoLogo}></img>
          <p>MongoDB</p>
        </div>
        <div>
          <img alt="express logo" src={expressLogo}></img>
          <p>Express</p>
        </div>
        <div>
          <img alt="node logo" src={nodeLogo}></img>
          <p>Node</p>
        </div>
      </div>
    </div>
  );
}
  
  export default About;
  