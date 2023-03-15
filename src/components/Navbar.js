import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Michael Frank Samaras</h1>
            <div className="links"> 
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            <a href="https://makemassair.co.uk/cv/MichaelFrankSamaras_CV_March2023.pdf" className="contact-resume" target="_blank" rel="noopener noreferrer" aria-label="link to resume">Resume</a>
            </div>
        </nav>
     );
}
 
export default Navbar;