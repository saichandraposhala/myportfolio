import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaUserCircle } from 'react-icons/fa'
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

  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Open to backend roles
          </div>

          <h1 className="hero-name">Saichandra Poshala</h1>

          <div className="hero-title">
            <span className="title-prefix">I'm a</span>
            <span className="title-animated">{displayText}</span>
            <span className="cursor">|</span>
          </div>

          <p className="hero-description">
            B.Tech Computer Science graduate with 2 years of experience designing
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
            <a href="https://github.com/saichandraposhala" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/saichandraposhala" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <FaLinkedin />
            </a>
            <a href="mailto:saichandraposhala@gmail.com" aria-label="Send an email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-profile" aria-label="Profile photo placeholder">
          <FaUserCircle />
          <span>Profile photo coming soon</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
