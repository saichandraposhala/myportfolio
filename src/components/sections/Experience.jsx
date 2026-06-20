import ExperienceCounter from './ExperienceCounter'
import './Experience.css'

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">💼 Experience</h2>
        
        {/* Add Counter Here */}
        <div className="experience-counter-wrapper">
          <ExperienceCounter />
        </div>
        
        <div className="experience-card">
          <div className="experience-header">
            <div>
              <h3>Senior Associate — Java Backend Developer</h3>
              <p className="company">Genpact | Client: GE Vernova</p>
              <p className="project">Project: AeroAlliance Platform</p>
            </div>
            <span className="date">Aug 2024 – Present</span>
          </div>
          
          <div className="experience-details">
            <p className="location">📍 Hyderabad, India</p>
            <ul>
              <li>Developed RESTful APIs and microservices using Java and Spring Boot for enterprise Cloud SaaS platform</li>
              <li>Implemented pagination and sorting with Spring Data JPA to optimize query performance</li>
              <li>Collaborated with Angular/JavaScript frontend team to resolve integration issues</li>
              <li>Resolved critical Docker build failures by migrating deprecated base images</li>
              <li>Integrated New Relic monitoring scripts across microservices</li>
              <li>Maintained CI/CD workflows using GitHub and Jenkins</li>
              <li>Supported AWS cloud environments (ECS, EC2, S3, VPC, CloudWatch)</li>
              <li>Wrote optimized SQL queries in PostgreSQL using DBeaver</li>
              <li>Conducted functional testing of agentic AI systems</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience