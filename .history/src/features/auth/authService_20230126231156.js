import axios from 'axios'

const API_URL1 = 'https://reqres.in/api/register'

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL1, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

const API_URL = 'https://reqres.in/api/login/'
 //Login user
const login = async (userData) => {
  const response = await axios.post(API_URL , userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
        state.user=false

}

const authService = {
  register,
  logout,
  login,
}

export default authService
