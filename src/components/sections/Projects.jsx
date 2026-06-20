import { useState, useEffect } from 'react'
import './Projects.css'

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    // Mock project data - replace with API call later
    const mockProjects = [
      {
        id: 1,
        title: 'E-Commerce Microservices',
        description: 'Built scalable e-commerce backend with Spring Boot microservices architecture',
        tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker']
      },
      {
        id: 2,
        title: 'Employee Management System',
        description: 'REST API for employee management with Spring Data JPA and PostgreSQL',
        tech: ['Spring Boot', 'JPA', 'PostgreSQL', 'REST API']
      },
      {
        id: 3,
        title: 'Cloud Monitoring Dashboard',
        description: 'AWS cloud monitoring dashboard with Docker deployment',
        tech: ['AWS', 'Docker', 'Java', 'CloudWatch']
      }
    ]
    setProjects(mockProjects)
  }, [])

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects