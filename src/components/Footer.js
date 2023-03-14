import ContactLinks from "./ContactLinks";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
            <p>Built in React</p>
            <ContactLinks />
            <p className="copyright">&copy; 2023 makemassair</p>
            </div>
        </footer>
      );
}
 
export default Footer;