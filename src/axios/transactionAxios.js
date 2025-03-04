import axios from "axios"

// API SERVER URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const transactionEndpoint = '/api/transactions'

const API_URL = API_BASE_URL + transactionEndpoint

// Create transaction | POST
export const createTransaction = (transactionObj) => {
  const response = axios.post(`${API_URL}`, transactionObj)
                    .then((res)=> res.data)
                    .catch((error) => console.log(error))

  return response
}