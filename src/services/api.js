import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
  timeout: 5000,
})

export const fetchProjects = async () => {
  try {
    const response = await api.get('/projects')
    return response.data
  } catch (error) {
    console.error('Error fetching projects:', error)
    // Fallback data
    return [
      {
        id: 1,
        title: 'E-Commerce Microservices',
        description: 'Built scalable e-commerce backend with Spring Boot microservices architecture',
        tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
        github: 'https://github.com',
        demo: 'https://demo.com'
      },
      {
        id: 2,
        title: 'Employee Management System',
        description: 'REST API for employee management with Spring Data JPA and PostgreSQL',
        tech: ['Spring Boot', 'JPA', 'PostgreSQL', 'REST API'],
        github: 'https://github.com',
        demo: 'https://demo.com'
      },
      {
        id: 3,
        title: 'Cloud Monitoring Dashboard',
        description: 'AWS cloud monitoring dashboard with Docker deployment',
        tech: ['AWS', 'Docker', 'Java', 'CloudWatch'],
        github: 'https://github.com',
        demo: 'https://demo.com'
      }
    ]
  }
}