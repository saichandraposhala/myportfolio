import axios from 'axios'
import projectData from '../data/db.json'

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
    return projectData.projects
  }
}