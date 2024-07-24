import Project from './Projects/Project'
import { useState } from 'react';


const Projects = () => {
  const projects = ['QuizGuru', 'React Portfolio', 'Weather Website', 'Image BgRemover', 'My Portfolio'];
  const navMenu = [...Array(projects.length).keys()].map(i => i + 1);

  const [activeTab, setActiveTab] = useState(1);
  const [activeProject, setActiveProject] = useState('quizguru');

  return (
    <section id='projects'>
      <div className="wrapper">
        <ol className='project-tabs'>{
          navMenu.map(ind => {
            return (
              <li key={ind}>
                <a href={`#${activeProject.split(' ').join('')}`}
                  className={`tab ${activeTab === ind ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab(ind);
                    setActiveProject(projects[ind - 1].toLowerCase())
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
          {projects.map((project, index) => {
            let id = project.split(' ').join('').toLowerCase();
            return (
              <li key={index}
                className={`${activeProject === project.toLowerCase() ? 'active' : ''}`}>
                <Project id={id} counter={index + 1} projectTitle={project} />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  );
}
export default Projects;
