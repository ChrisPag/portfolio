import {AiOutlineArrowDown} from 'react-icons/ai';
import '../css/Home.css';
import Typed from "react-typed"

function Home() {
  return (
    <div className="home">
      <div className="description">
        <p className="medium-text">Hi, I'm</p>
        <p className="large-text">Christina Paguirigan</p>

        <p className="medium-text word">
          {/*I'm a web developer near Kitchener-Waterloo.*/}
          I'm a&nbsp;
          <Typed 
          strings={[
                " Web Developer",
                " Fall 2023 Co-op Student",
                " IT Graduate"
              ]}
              typeSpeed={50}
              backSpeed={50}
              loop
              className="change-text"
        />
        </p>
        
        <div>
        <a href="#projects"><button>View my work <AiOutlineArrowDown id="downArrow"/></button></a>
        </div>
        
      </div>

      
    </div>
  );
}
  
export default Home;
  