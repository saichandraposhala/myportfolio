import './Certifications.css'

const Certifications = () => {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">📜 Certifications</h2>
        
        <div className="cert-grid">
          <div className="cert-card">
            <div className="cert-icon">🏆</div>
            <div className="cert-content">
              <h3>Java Full Stack - TalentNext</h3>
              <p className="cert-issuer">Wipro Limited</p>
              <p className="cert-program">Digital Skills Readiness Program</p>
              
              <div className="cert-details">
                <div className="cert-detail-item">
                  <span className="detail-label">📅 </span>
                  <span className="detail-value">May - September 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications