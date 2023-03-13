import avatar from './assets/img/avatar-800.jpg';

const Home = () => {
    return ( 
        <div className="home">
            <h1>Michael Frank Samaras</h1>
            <h2>Front End Developer</h2>
            <img src={avatar} alt="" className="avatar" />
            <p className="brand-statement"></p>
            <p className="intro">Hello, and welcome to my portfolio.</p>
            <p className="intro">Until recently I was a self taught HTML/CSS web developer working with WordPress, and XML. In November I undertook a 16 week front-end web developer bootcamp with edX and Skills4Life that ran until March 2023. I now have foundational knowledge of JavaScript, APIs, ES6, Node.js, JSX, and React. As it goes, this portfolio website has been built in React.</p>
        </div>
     );
}
 
export default Home;