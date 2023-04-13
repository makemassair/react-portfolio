import { Link, NavLink } from "react-router-dom";
import logo from '../assets/img/logo.png';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link to="/"><img src={logo} alt="" className="logo" /></Link>
            <div className="links"> 
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <a href="https://makemassair.co.uk/cv/michael-samaras-cv-march23.pdf" className="contact-resume" target="_blank" rel="noopener noreferrer" aria-label="link to resume">Resume</a>
            </div>
        </nav>
     );
}
 
export default Navbar;