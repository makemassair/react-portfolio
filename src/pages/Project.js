import "./Project.css";
import iconDeployment from '../assets/img/icon-deployment@2x.svg';
import iconGitHub from '../assets/img/icon-github@2x.svg';


const Project = ({projects, title}) => {

    return ( 
        <>
        <div className="home-block">
            <span className="page-title">{ title }</span>
            <div className="contact-bar">
                <span className="contact-bar-number">+44 (0) 7921 293782</span>
                <span className="contact-bar-email">mike@makemassair.co.uk</span>
                <span className="contact-bar-locale">Liverpool, UK</span>
            </div>
        </div>
        <div className="statement-container">
            <div className="page-statement">
                <div className="statement-block">
                    <div id="block2">
                        <h2>Some examples of my work ...</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="project-list">
            {projects.projects.map(project => (
                <div className="project-card" key={project.id}>
                    <img src={project.screenshot} alt={ project.title } className="project-screenshot" />
                    <h2 className="project-title">{ project.title }</h2>
                    <div className="description"><p>{ project.description }</p></div>
                    <div className="project-urls">
                        <div className="project-url">
                            <img src={iconDeployment} alt="" className="icon" />
                            <a className="url" href={ project.url } target="_blank" rel="noopener noreferrer" aria-label="link to GitHub">View</a>
                        </div>
                        <div className="space"></div>
                        <div className="project-github">
                            <img src={iconGitHub} alt="" className="icon" />
                            <a className="github" href={ project.github } target="_blank" rel="noopener noreferrer" aria-label="link to GitHub">GitHub</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>
     );
}
 
export default Project;