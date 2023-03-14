const Project = ({projects, title}) => {

    return ( 
        <div className="project-list">
            <h2>{ title }</h2>
            {projects.map((project) => (
                <div className="project-card" key={project.id}>
                    <h2 className="project-title">{ project.title }</h2>
                    <p className="screenshot">{ project.screenshot }</p>
                    <a className="project-github" href={ project.github } target="_blank" rel="noopener noreferrer" aria-label="link to GitHub">GitHub</a>
                    <a className="project-url" href={ project.url } target="_blank" rel="noopener noreferrer" aria-label="link to GitHub">Deployed App</a>
                </div>
            ))}
        </div>
     );
}
 
export default Project;