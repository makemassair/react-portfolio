import ContactLinks from "./ContactLinks";

const Footer = () => {
    return (
        <footer className="footer">
            <p>Built in React</p>
            <p className="links">
                <ContactLinks />
            </p>
            <p className="copyright">&copy; 2023 makemassair</p>
        </footer>
      );
}
 
export default Footer;