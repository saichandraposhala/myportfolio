import { useState } from 'react'
import { FaEnvelope, FaMobileAlt, FaMapMarkerAlt } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

    if (!endpoint) {
      setStatus('Contact form is not configured yet. Please email me directly.')
      return
    }

    setIsSubmitting(true)
    setStatus('')

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!response.ok) throw new Error('Form submission failed')

      setStatus('Thanks for reaching out. I will get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus('Something went wrong. Please email me directly instead.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>I'm always open to new opportunities and collaborations.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <strong>Email</strong>
                  <p>saichandraposhala@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <FaMobileAlt className="contact-icon" />
                <div>
                  <strong>Phone</strong>
                  <p>+91 6302259874</p>
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <strong>Location</strong>
                  <p>Hyderabad, Telangana</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {status && <p className="form-status" role="status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact