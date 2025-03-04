import { Button, Form } from "react-bootstrap";
import InputField from "./InputField";
import { useState } from "react";
import { loginUser } from "../axios/userAxios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const initialFormData = {
  email: '',
  password: ''
}
const LoginForm = (props) => {
  // eslint-disable-next-line react/prop-types
  const { setUser } = props

  const [formData, setFormData] = useState(initialFormData)
  const { email, password } = formData

  // State to implement loading flow
  const [isLoading, setIsLoading] = useState(false)

  // Handle on Change
  const handleOnChange = (e) => {
    const { value, name } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  // Hook from react router to navigate between pages
  const navigate = useNavigate()

  // Handle on Submit
  const handleOnSubmit = async(e) => {
    e.preventDefault()
    // setisLoading to true
    setIsLoading(true)
    // send api request to try login
    const response = await loginUser(email, password)

    // setisLoading to false
    setIsLoading(false)

    // Handle Error
    if(response.status === 'error'){
      return toast.error(response.message)
    }

    // Handle Success
    // show toast message
    toast.success(response.message)

    // set User
    setUser(response.data)

    // Navigate to transactions page
    navigate("/transactions")
  }

  return ( 
    <Form onSubmit={handleOnSubmit}>
      <InputField 
        label="Email"
        inputFieldAttributes={{
          type: 'email',
          name: 'email',
          placeholder: 'Enter your email',
          required: true,
          value: email,
          onChange: handleOnChange
        }}
      />

      <InputField 
        label="Password"
        inputFieldAttributes={{
          type: 'password',
          name: 'password',
          placeholder: 'Enter new password',
          required: true,
          value: password,
          onChange: handleOnChange
        }}
      />

      <Button 
        variant="primary" 
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? 'Loging In...' : 'Login'}
      </Button>
    </Form>
   );
}
 
export default LoginForm;