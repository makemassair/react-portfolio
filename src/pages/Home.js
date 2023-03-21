import avatar from '../assets/img/avatar.png';
import hello from '../assets/img/icon-hello.svg';

const Home = () => {
    return ( 
        <>
        <div className="home-block">
            <h2>Front End Developer</h2>
        </div>
        <div className="home">
            <div className="page-statement">
                <div className="statement-block">
                    <div id="block1">
                        Hello <img src={hello} alt="" className="hello" />
                    </div>
                    <div id="block2">
                        <p>On this site you'll find some of my work.</p>
                        <p>Feel free to drop me any questions.</p>
                    </div>
                </div>
                <div className="avatar">
                    <img src={avatar} alt="Michael Frank Samaras" />
                </div>
                
                </div>

            <h1>Michael Frank Samaras </h1>
                <p className="intro"></p>
                <p className="intro">Until recently I was a self taught HTML/CSS web developer working with WordPress, and XML.</p> 
                
                <p className="intro">In November 2022 I undertook a 16 week front-end web developer bootcamp with edX and Skills4Life that ran until March 2023. I now have foundational knowledge of JavaScript, APIs, ES6, Node.js, JSX, and React. As it goes, this portfolio website has been built in React.</p>
        </div>
        </>
     );
}
 
export default Home;