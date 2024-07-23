import { Link } from 'react-scroll'
import Project from './Projects/Project'
import { useState } from 'react';

// const Projects = () => {
//   const projects = ['Project1', 'Project2', 'Project3'];
//   const navMenu = [...Array(projects.length).keys()].map(i => i + 1);

//   return <section id='projects'>
//     <div className="container">
//       <ol className='project-navigation'>{
//         navMenu.map(i =>
//           <li key={i}>
//             <Link to={`${projects[i - 1].toLowerCase().toString()}${i}}`}
//               smooth={true}
//               duration={500}
//               spy={true}>
//               {i}
//             </Link>
//           </li>
//         )}
//       </ol>
//       <ul className="project-list">
//         {projects.map((project, index) => (
//           <li key={index}>
//             <Project id={index + 1} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   </section>;
// }

// export default Projects;


const Projects = () => {
  const projects = ['Project1', 'Project2', 'Project3'];
  const navMenu = [...Array(projects.length).keys()].map(i => i + 1);

  const [activeTab, setActiveTab] = useState(1);

  return (
    <section id='projects'>
      <div className="container">
        <ol className='project-tabs'>{
          navMenu.map(ind => {
            let destination = projects[ind - 1].toLowerCase();
            return (
              <li key={ind}>
                <a href={`#${destination}`}
                  className={`tab ${activeTab === ind ? 'active' : ''}`}
                  onClick={() => { setActiveTab(ind) }}>
                  {ind}
                </a>
              </li>)
          })}
        </ol>
        <ul className="project-list">
          {projects.map((project, index) => (
            <li key={index}>
              <Project id={project.toLowerCase()} project={project.toLowerCase()} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default Projects;