const Projects = () => {
    const { data: projects, error} = useFetch('https://')


    return ( 
        <div className="projects">
            Grid layout for projects (x6) will go here.
        </div>
     );
}
 
export default Projects;