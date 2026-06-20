import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: '💻 Languages',
      skills: ['Java (Primary)', 'Python', 'JavaScript', 'SQL']
    },
    {
      title: '⚡ Frameworks',
      skills: ['Spring Boot', 'Spring Data JPA', 'REST APIs', 'Microservices']
    },
    {
      title: '☁️ Cloud / AWS',
      skills: ['ECS', 'EC2', 'S3', 'VPC', 'CloudWatch']
    },
    {
      title: '🛠️ DevOps & Tools',
      skills: ['Docker', 'Jenkins', 'GitHub', 'DBeaver', 'PuTTY', 'New Relic']
    },
    {
      title: '📊 Databases',
      skills: ['PostgreSQL', 'Query Writing', 'Query Optimization', 'Relational Data Modeling']
    },
    {
      title: '🧠 Fundamentals & AI',
      skills: ['OOP', 'Data Structures', 'Algorithms', 'Agentic AI Systems Testing', 'AI Coding Assistants']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">🛠️ Technical Skills</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills