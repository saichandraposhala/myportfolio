import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              B.Tech Computer Science graduate and backend developer with 20 months 
              of experience designing scalable Java applications, REST APIs, and 
              database integrations. Adept at building robust internal services and 
              integrating complex enterprise systems to streamline data workflows.
            </p>
            <p>
              Highly motivated to leverage software engineering expertise in a 
              platform role to drive infrastructure automation, enhance CI/CD 
              processes, and improve the overall developer experience.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">20</span>
                <span className="stat-label">Months Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">8.47</span>
                <span className="stat-label">CGPA</span>
              </div>
              <div className="stat">
                <span className="stat-number">9+</span>
                <span className="stat-label">Projects</span>
              </div>
            </div>

            <div className="about-education">
              <h4>🎓 Education</h4>
              <p>
                <strong>Kakatiya Institute of Technology and Science</strong><br />
                B.Tech in Computer Science and Engineering (2020-2024)<br />
                CGPA: 8.47/10.0
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About