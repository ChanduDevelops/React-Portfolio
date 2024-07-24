import { useState } from 'react';
import StackIcon from 'tech-stack-icons';


const Skills = () => {
  const [skillText, setSkillText] = useState('');
  const [titleVisible, setTitleVisible] = useState(false);
  const [activeSkillType, setActiveSkillType] = useState('');

  const skills = {
    python: 'Python',
    java: 'Java',
    mysql: 'MySQL',
    mongodb: 'MongoDB',
    nodejs: 'NodeJS',
    html5: 'HTML',
    css3: 'CSS',
    reactjs: 'ReactJS',
    tailwindcss: 'Tailwind CSS',
    js: 'JavaScript',
    git: 'Git',
    github: 'GitHub',
  };

  const groupedSkills = {
    backend: {
      python: 'Python',
      java: 'Java',
      nodejs: 'NodeJS',
      mysql: 'MySQL',
      mongodb: 'MongoDB'
    },
    frontend: {
      js: 'JavaScript',
      html5: 'HTML',
      css3: 'CSS',
      reactjs: 'ReactJS',
      tailwindcss: 'Tailwind CSS'
    },
    databases: {
      mysql: 'MySQL',
      mongodb: 'MongoDB'
    },
    others: {
      nodejs: 'NodeJS',
      git: 'Git',
      github: 'GitHub'
    }
  };


  return (
    <section id='skills'>
      <div className='container'>
        <ul className="skill-tabs">
          <li className={`${!activeSkillType ? 'active' : ''}`}
            onClick={() => {
              setActiveSkillType('');
            }}>All</li>
          {Object.keys(groupedSkills).map((category) => {
            return (
              <li
                key={category}
                className={`${activeSkillType === category ?
                  'active' : ''}`}
                onClick={() => {
                  setActiveSkillType(category);
                }}>
                {category.charAt(0).toUpperCase() + category.substring(1)}
              </li>
            )
          })}
        </ul>
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
              className={`${activeSkillType && !Object.keys(groupedSkills[activeSkillType] || {}).includes(key) ? 'category-skills' : ''}`}
              onMouseOver={() => {
                setSkillText(value);
                setTitleVisible(true);
              }}
              onMouseOut={() => {
                setSkillText('');
                setTitleVisible(false);
              }}
            >
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

export default Skills;