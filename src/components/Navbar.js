import { NavLink } from "react-router-dom";
import logo from '../assets/img/logo.png';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <img src={logo} alt="" className="logo" />
            <div className="links"> 
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <a href="https://makemassair.co.uk/cv/MichaelFrankSamaras_CV_March2023.pdf" className="contact-resume" target="_blank" rel="noopener noreferrer" aria-label="link to resume">Resume</a>
            </div>
        </nav>
     );
}
 
export default Navbar;