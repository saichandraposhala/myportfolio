import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>© {year} Saichandra Poshala. All rights reserved.</p>
          <p className="footer-tagline">Building scalable solutions, one API at a time ☕</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer