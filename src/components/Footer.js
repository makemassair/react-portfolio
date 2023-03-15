import ContactLinks from "./ContactLinks";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
            <ContactLinks />
            <div className="copyright">&copy; 2023 makemassair</div>
            </div>
        </footer>
      );
}
 
export default Footer;