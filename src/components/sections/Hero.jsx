import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const titles = ['Java Backend Developer', 'Spring Boot Developer', 'Cloud Enthusiast','Agentic AI Enthusiast','Perpetual Learner']
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentTitle = titles[currentTitleIndex]
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1))
        if (displayText.length === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1))
        if (displayText.length === 0) {
          setIsDeleting(false)
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
        }
      }
    }, isDeleting ? 100 : 150)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTitleIndex])

  // Skill data with positions
  const skills = [
    { name: 'Java', icon: '☕', angle: 0 },
    { name: 'Spring Boot', icon: '🚀', angle: 36 },
    { name: 'AWS', icon: '☁️', angle: 72 },
    { name: 'Docker', icon: '🐳', angle: 108 },
    { name: 'PostgreSQL', icon: '🐘', angle: 144 },
    { name: 'REST APIs', icon: '📊', angle: 180 },
    { name: 'Microservices', icon: '🔧', angle: 216 },
    { name: 'Spring Data JPA', icon: '📦', angle: 252 },
    { name: 'Jenkins', icon: '🔄', angle: 288 },
    { name: 'New Relic', icon: '📈', angle: 324 }
  ]

  return (
    <section id="about" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for opportunities
          </div>

          <h1 className="hero-name">Saichandra Poshala</h1>

          <div className="hero-title">
            <span className="title-prefix">I'm a</span>
            <span className="title-animated">{displayText}</span>
            <span className="cursor">|</span>
          </div>

          <p className="hero-description">
            B.Tech Computer Science graduate with 20 months of experience designing
            scalable Java applications, REST APIs, and cloud-native solutions.
          </p>

          <div className="hero-buttons">
            <a href="#experience" className="btn-primary">
              View Experience
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="hero-social">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/saichandraposhala" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:saichandraposhala@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          {/* SVG for connecting lines */}
          <svg className="connection-lines" viewBox="-200 -200 400 400">
            {skills.map((skill, index) => {
              const angle = (skill.angle - 90) * (Math.PI / 180)
              const radius = 160
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius
              return (
                <line
                  key={index}
                  x1="0"
                  y1="0"
                  x2={x}
                  y2={y}
                  className="skill-line"
                  stroke="rgba(249, 115, 22, 0.15)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
              )
            })}
          </svg>

          {/* Central Sphere */}
          <div className="profile-ring">
            <div className="profile-placeholder">
              <span className="center-text">Skills✦</span>
            </div>
          </div>

          {/* Skill Badges */}
          {skills.map((skill, index) => {
            const angle = (skill.angle - 90) * (Math.PI / 180)
            const radius = 180
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius
            
            return (
              <div
                key={index}
                className="floating-badge"
                style={{
                  left: `calc(50% + ${x}px - 60px)`,
                  top: `calc(50% + ${y}px - 18px)`,
                  animationDelay: `${index * 0.3}s`
                }}
              >
                <span className="badge-icon">{skill.icon}</span>
                <span className="badge-name">{skill.name}</span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="scroll-indicator">
        <FaArrowDown />
      </div>
    </section>
  )
}

export default Hero