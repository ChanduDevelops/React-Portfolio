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
          <div>
            <div className="loader">
              <div></div>
            </div>
            <h1 className='line1'>My</h1>
            <span className='skill-title'>
              <h1 className='line2'>
                {titleVisible ?
                  skillText :
                  'Tech Stack'
                }
              </h1>
            </span>
          </div>
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
