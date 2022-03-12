import {AiOutlineArrowDown} from 'react-icons/ai';
import '../css/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="description">
        <p className="medium-text">Hi, I'm</p>
        <p className="large-text">Christina Paguirigan</p>

        <p className="medium-text">
          I'm a front end web developer near Toronto, ON.
        </p>

        <a href="#projects"><button>View my work <AiOutlineArrowDown id="downArrow"/></button></a>
      </div>

      
    </div>
  );
}
  
export default Home;
  