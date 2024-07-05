import { useState } from 'react';
import StackIcon from 'tech-stack-icons';

export default function Skills() {
  const [skillText, setSkillText] = useState('');
  const [titleVisible, setTitleVisible] = useState(false);

  const skills = {
    python: 'Python',
    js: 'JavaScript',
    java: 'Java',
    mysql: 'MySQL',
    mongodb: 'MongoDB',
    html5: 'HTML',
    css3: 'CSS',
    reactjs: 'ReactJS',
    tailwindcss: 'Tailwind CSS',
    nodejs: 'NodeJS',
    git: 'Git',
    github: 'GitHub',
  };

  return (
    <section id='skills'>
      <div className='container'>
        <div className='left'>
          <h1>
            <span className='line1'>My</span>
            <span className='line2'>
              <span>Tech</span> <span>Stack</span>
            </span>
          </h1>
          <h2 className={`skill-title ${titleVisible ? 'visible' : ''}`}>
            {skillText}
          </h2>
        </div>

        <span className='seperator'></span>
        <ul className='skill-list'>
          {Object.entries(skills).map(([key, value]) => (
            <li
              key={key}
              onMouseOver={() => {
                setSkillText(value);
                setTitleVisible(true);
              }}
              onMouseOut={() => {
                setSkillText('');
                setTitleVisible(false);
              }}>
              <StackIcon
                name={key}
                className='skill-icon'
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
