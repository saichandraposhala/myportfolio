import { useState, useEffect } from 'react'
import './ExperienceCounter.css'

const ExperienceCounter = () => {
  const [time, setTime] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Your start date: August 8, 2024
    const startDate = new Date('2024-08-08T00:00:00')
    
    const updateCounter = () => {
      const now = new Date()
      const diff = now - startDate // Difference in milliseconds
      
      // Calculate total seconds
      const totalSeconds = Math.floor(diff / 1000)
      const totalMinutes = Math.floor(totalSeconds / 60)
      const totalHours = Math.floor(totalMinutes / 60)
      const totalDays = Math.floor(totalHours / 24)
      
      // Calculate years, months, days
      let years = now.getFullYear() - startDate.getFullYear()
      let months = now.getMonth() - startDate.getMonth()
      let days = now.getDate() - startDate.getDate()
      
      // Adjust for negative days
      if (days < 0) {
        months--
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0)
        days += lastMonth.getDate()
      }
      
      // Adjust for negative months
      if (months < 0) {
        years--
        months += 12
      }
      
      // Calculate remaining hours, minutes, seconds
      const remainingHours = totalHours % 24
      const remainingMinutes = totalMinutes % 60
      const remainingSeconds = totalSeconds % 60
      
      setTime({
        years,
        months,
        days,
        hours: remainingHours,
        minutes: remainingMinutes,
        seconds: remainingSeconds
      })
    }
    
    // Update every second
    const interval = setInterval(updateCounter, 1000)
    updateCounter() // Initial call
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="experience-counter">
      <div className="counter-header">
        <span className="counter-icon">🚀</span>
        <h3>Experience Tracker</h3>
      </div>
      
      <div className="counter-subtitle">
        Started: August 8, 2024
      </div>
      
      <div className="counter-grid">
        <div className="counter-item">
          <div className="counter-number">{time.years}</div>
          <div className="counter-label">Years</div>
        </div>
        <div className="counter-item">
          <div className="counter-number">{time.months}</div>
          <div className="counter-label">Months</div>
        </div>
        <div className="counter-item">
          <div className="counter-number">{time.days}</div>
          <div className="counter-label">Days</div>
        </div>
        <div className="counter-item">
          <div className="counter-number">{String(time.hours).padStart(2, '0')}</div>
          <div className="counter-label">Hours</div>
        </div>
        <div className="counter-item">
          <div className="counter-number">{String(time.minutes).padStart(2, '0')}</div>
          <div className="counter-label">Minutes</div>
        </div>
        <div className="counter-item">
          <div className="counter-number">{String(time.seconds).padStart(2, '0')}</div>
          <div className="counter-label">Seconds</div>
        </div>
      </div>
      
      <div className="counter-total">
        Total Experience: <span>{time.years}y {time.months}m {time.days}d</span>
      </div>
    </div>
  )
}

export default ExperienceCounter