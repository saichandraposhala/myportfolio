import './Experience.css'

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">💼 Experience</h2>

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
              <li>Developed and maintained 10 Java/Spring Boot RESTful microservices supporting 30K+ active users and 40K+ requests as part of a 4-person team.</li>
              <li>Reduced response times from 2.5 seconds to 400 milliseconds by optimizing Spring Data JPA pagination and sorting.</li>
              <li>Fixed Docker build failures across approximately 40 microservices by migrating deprecated base images and standardizing the solution platform-wide.</li>
              <li>Supported AWS production environments across approximately 45–50 UI and backend services using ECS, EC2, S3, VPC, and CloudWatch.</li>
              <li>Maintained 30+ GitHub and Jenkins CI/CD pipelines to support consistent, reliable deployments.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience