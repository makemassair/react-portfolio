import Project from './Project';
import { useEffect, useState } from 'react';
// import projects from '../data/db.json'

const Projects = () => {
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        fetch('../data/db.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setProjects(data);
        })
    }, [])


    return ( 
        <div className="projects">
            <div className="projects-container">
                {projects && <Project projects={projects} title="Projects"/>}
            {/* Grid layout for projects (x6) will go here. */}
            </div> 
        </div>
     );
}
 
export default Projects;