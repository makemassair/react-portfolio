const ContactLinks = () => {
    return ( 
        <div className="contact-links">
            <a href="mailto:mike@makemassair.co.uk" className="contact-email" target="_blank" rel="noopener noreferrer" aria-label="link to email">Email</a>
            <a href="https://github.com/makemassair" className="contact-github"target="_blank" rel="noopener noreferrer" aria-label="link to GitHub">GitHub</a>
            <a href="https://www.linkedin.com/in/mikesamaras/" className="contact-linkedin" target="_blank" rel="noopener noreferrer" aria-label="link to LinkedIn">LinkedIn</a>
            <a href="https://makemassair.co.uk/cv/MichaelFrankSamaras_CV_March2023.pdf" className="contact-resume" target="_blank" rel="noopener noreferrer" aria-label="link to resume">Resume</a>
        </div>
     );
}
 
export default ContactLinks;