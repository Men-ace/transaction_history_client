import axios from "axios"

// API SERVER URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const userEndpoint = '/api/users'

const API_URL = API_BASE_URL + userEndpoint

// Signup User | Create User | POST
export const createUser = (userObj) => {
  const response = axios.post(`${API_URL}/signup`, userObj)
                    .then((res)=> res.data)
                    .catch((error) => console.log(error))

  return response
}

// Login User | Login User | Finding user in db | POST
export const loginUser = (email, password) => {
  const response = axios.post(`${API_URL}/login`, { email, password })
                    .then((res)=> res.data)
                    .catch((error) => console.log(error))

  return response
}