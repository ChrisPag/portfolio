import '../css/Footer.css';
import {AiOutlineArrowUp} from 'react-icons/ai';

function Footer() {
    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
        });
    }

    return (  
        <div className="footer">
            <p><button onClick={scrollToTop}><AiOutlineArrowUp id="up-arrow" /></button></p>
            <p>TOP</p>
        </div>
    );
}

export default Footer;