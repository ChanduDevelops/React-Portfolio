import Project from './Projects/Project'
import { useState } from 'react';


const Projects = () => {
  const projects = ['Project1', 'Project2', 'Project3'];
  // const projects = ['Project1']
  const navMenu = [...Array(projects.length).keys()].map(i => i + 1);

  const [activeTab, setActiveTab] = useState(1);
  const [activeProject, setActiveProject] = useState('project1');

  return (
    <section id='projects'>
      <div className="container">
        <ol className='project-tabs'>{
          navMenu.map(ind => {
            return (
              <li key={ind}>
                <a href={`#${activeProject}`}
                  className={`tab ${activeTab === ind ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab(ind);
                    setActiveProject(projects[ind - 1].toLowerCase())
                  }}>
                  <span></span>
                  {ind}
                </a>
              </li>)
          })}
        </ol>
        <ul className="project-list">
          {projects.map((project, index) => (
            <li key={index}
              className={`${activeProject === project.toLowerCase() ? 'active' : ''}`}>
              <Project id={project.toLowerCase()} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default Projects;
