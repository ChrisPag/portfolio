import '../css/Contact.css';
import githubLogo from '../img/github-icon.png';
import linkedinLogo from '../img/linkedin-icon.png';

function Contact() {
    return (
      <div className="contact">
        <p className="header" id="contact"><span className="mark">Contact</span></p>
        <div className="container">
          <p>Get in touch with me!</p>
          <a href="mailto:christinabpaguirigan@gmail.com"><button>
            Let's talk 
          </button></a>
      
          <div className="links">
            <a href="https://github.com/ChrisPag">
              <img src={githubLogo} alt="github logo"></img>
            </a>
            <a href="https://linkedin.com/in/christina-bose-paguirigan-1055791b2/">
              <img src={linkedinLogo} alt="linkedin logo"></img>
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;
  