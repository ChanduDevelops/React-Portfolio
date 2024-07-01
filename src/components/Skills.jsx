import logos from './logos';

const Skills = () => {
  const skills = [
    'Python',
    'JavaScript',
    'Java',
    'SQL',
    'MongoDB',
    'HTML',
    'CSS',
    'React',
    'TailwindCSS',
    'NodeJS',
    'ExpressJS',
    'Git',
    'GitHub',
  ];
  return (
    <section
      id='skills'
      style={{ height: '100vh' }}>
      <div className='container'>
        <h1>
          Me & My <br />
          <span>Tech</span> Stack
        </h1>
        <ul>
          {skills.map((skill, index) => (
            <li
              key={index}
              className={`skill ${skill.toLowerCase()}`}>
              <img
                src={logos[skill]}
                alt=''
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
