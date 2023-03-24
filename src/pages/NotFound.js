const NotFound = () => {
    return ( 
        <>
        <div className="home-block">
            <span className="page-title">404.</span>
            <div className="contact-bar">
                <span className="contact-bar-number">+44 (0) 7921 293782</span>
                <span className="contact-bar-email">mike@makemassair.co.uk</span>
                <span className="contact-bar-locale">Liverpool, UK</span>
            </div>
        </div>
        <div className="contact err404 statement-container">
            <div className="page-statement">
                <div className="statement-block">
                    <div id="block2">
                        <h2>Whoops, that page doesn't exist.</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="err404-block">
        </div>
        </>
     );
}
 
export default NotFound;