import '../css/Navbar.css';
import { useState, useEffect } from 'react';
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [showMin, setShowMin] = useState(false);

  //When window is less than 800px, isDesktop is true
  const [isDesktop, setDesktop] = useState(window.innerWidth > 900);
  const updateMedia = () => {
    setDesktop(window.innerWidth > 900);
  };

  //Listens to see if window is resized
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  //If true, show the minimized links
  const menuClick = () =>{
    setShowMin(state=> !state);
    
  }

  return (
    <div className="wrapper">
      <div className="navbar">
        {isDesktop ?( 
        <div className="navlink">
          <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </div>): (
          <p onClick={menuClick}><FaBars id="menu-icon" /></p>
        )}

        {!isDesktop && showMin && 
        <div className="minlinks">
          <p>
          <a className="hoverEffect" href="#projects">Projects</a>
          </p>
          <p>
          <a className="hoverEffect" href="#about">About</a>
          </p>
          <p>
          <a className="hoverEffect" href="#contact">Contact</a>
          </p>
        </div>}
      </div>
    </div>
  );
}

export default Navbar;
