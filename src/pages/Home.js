import avatar from '../assets/img/avatar.png';
import hello from '../assets/img/icon-hello.svg';
import iconCode from '../assets/img/icon-code.svg';
import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <>
        <div className="home-block">
            <span className="page-title">Front End Developer</span>
            <div className="contact-bar">
                <span className="contact-bar-number">+44 (0) 7921 293782</span>
                <span className="contact-bar-email">mike@makemassair.co.uk</span>
                <span className="contact-bar-locale">Liverpool, UK</span>
            </div>
        </div>
        <div className="statement-container">
            <div className="page-statement">
                <div className="statement-block">
                    <div id="block1">
                        Hello. <img src={hello} alt="" className="hello" />
                    </div>
                    <div id="block2">
                        <p>On this site you'll find some of <Link to={"/projects"}>my work</Link>.</p>
                        <p>Feel free to drop me <Link to={"/contact"}>any questions</Link>.</p>
                    </div>
                </div>
                <div className="avatar">
                    <img src={avatar} alt="Michael Frank Samaras"/>
                </div>
            </div>
        </div>
        <div className="home">
            <div className="name">
                <h1>Michael <em>Frank</em> Samaras</h1>                
            </div>
            <div className="content">
                <div className="col-icon"><img src={iconCode} alt="" className="iconCode" /></div>
                <div className="copy">
                    <div className="copy-sub-head">An introduction.</div>
                    <div className="copy-para">
                        <p>Until recently I was a self taught HTML + CSS web designer working primarily with WordPress. In November '22 I undertook a 16-week front-end web development boot camp that ran until March '23.</p> 
                        <p>As a result I now have foundational knowledge of JavaScript, React, ES6, JSX, Node.js, APIs, and GitHub.</p>
                        <p>This site has been built in the React JavaScript library, following what I learnt in the final modules of the course.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Home;