import StackIcon from 'tech-stack-icons';

export default function Skills() {
  const skills = [
    'python',
    'js',
    'java',
    'mysql',
    'mongodb',
    'html5',
    'css3',
    'reactjs',
    'tailwindcss',
    'nodejs',
    'git',
    'github',
  ];

  return (
    <section id='skills'>
      <div className='container'>
        <h1>
          <span className='line1'>My</span>
          <span className='line2'>
            <span>Tech</span> <span>Stack</span>
          </span>
        </h1>
        <span className='seperator'></span>
        <ul className='skill-list'>
          {skills.map((skill) => (
            <li key={skill}>
              <StackIcon
                name={skill}
                className='skill'
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
