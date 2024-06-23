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
  ];
  return (
    <section
      id='skills'
      style={{ height: '100vh' }}>
      Skills
      <br />
      {skills}
    </section>
  );
};

export default Skills;
