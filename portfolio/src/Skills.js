import './style/Skills.css';

function Skills() {
  const skills = [
    { name: 'C++', category: 'Embarcados' },
    { name: 'C', category: 'Embarcados' },
    { name: 'STM32', category: 'Embarcados' },
    { name: 'Python', category: 'Backend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'HTML', category: 'Frontend' },
    { name: 'CSS', category: 'Frontend' },
    { name: 'React', category: 'Frontend' },
    { name: 'Linux', category: 'Sistemas' },
    { name: 'Git', category: 'Ferramentas' },
    { name: 'Agile', category: 'Metodologia' },
    { name: 'SCRUM', category: 'Metodologia' },
  ];

  return (
    <div className="Skills">
      <div className="Skills-container">
        <div className="Skills-header">
          <h2 className="Skills-title">Habilidades</h2>
          <div className="Skills-underline"></div>
        </div>

        <div className="Skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="Skill-card">
              <div className="Skill-card-glow"></div>
              <div className="Skill-card-content">
                <div className="Skill-category">{skill.category}</div>
                <div className="Skill-name">{skill.name}</div>
              </div>
              <div className="Skill-corner"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;