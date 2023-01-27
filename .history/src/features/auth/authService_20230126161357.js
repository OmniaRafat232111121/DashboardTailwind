import axios from 'axios'

const API_URL1 = '/api/users/'

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL1, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

const API_URL = 'https://randomuser.me/api/?results=50/'
 //Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService
