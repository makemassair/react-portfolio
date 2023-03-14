import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Michael Frank Samaras</h1>
            <div className="links"> 
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <a href="" className="contact-resume" target="_blank" rel="noopener noreferrer" aria-label="link to resume">Resume</a>
            </div>
        </nav>
     );
}
 
export default Navbar;