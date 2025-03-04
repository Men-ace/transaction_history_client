import { Route, Routes } from 'react-router'
import './App.css'
import SignupPage from './pages/SignupPage'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-bootstrap'
import TransactionPage from './pages/TransactionPage'
import { useState } from 'react'
import LoginPage from './pages/LoginPage'


function App() {
  // state to track user 
  const [user, setUser] = useState({})

  return (
    <><>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />

        {/* Private routes */}
        <Route path='/transaction' element={<TransactionPage />} />

      </Routes>
    </><ToastContainer /></>
  )
}

export default App
