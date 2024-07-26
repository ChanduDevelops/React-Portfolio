import Project from './Projects/Project'
import myProjects from './Projects/projectsData';
import { useState } from 'react';


const Projects = () => {
  const navMenu = myProjects.map(project => project.index);

  const [activeTab, setActiveTab] = useState(1);
  const [activeProject, setActiveProject] = useState(myProjects[0].id);
  return (
    <section id='projects'>
      <div className="wrapper">
        <ol className='project-tabs'>{
          navMenu.map(ind => {
            return (
              <li key={ind}>
                <a href={`#${activeProject}`}
                  className={`tab ${activeTab === ind ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab(ind);
                    setActiveProject(myProjects[ind - 1].id)
                  }}>
                  <span className="top-hc"></span>
                  <span className='circle'></span>
                  <span className="bottom-hc"></span>
                  {/* {ind} */}
                </a>
              </li>)
          })}
        </ol>
        <ul className="project-list">
          {myProjects.map(project => {
            return (
              <li key={project.id}
                className={`${activeProject === project.id ? 'active' : ''}`}>
                <Project
                  index={project.index}
                  id={project.id}
                  title={project.title}
                  info={project.info}
                  tech={project.tech}
                  image={project.image}
                  liveLink={project.liveLink}
                  sourceLink={project.sourceLink} />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  );
}
export default Projects;
