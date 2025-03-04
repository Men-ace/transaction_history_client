import { Button, Form } from "react-bootstrap";
import InputField from "./InputField";
import { useState } from "react";
import { createUser } from "../axios/userAxios";
import { toast } from "react-toastify";

const initialFormData = {
  full_name: '',
  email: '',
  password: '',
  confirm_password: '',
}

const SignupForm = () => {
  const [formData, setFormData] = useState(initialFormData)
  const { full_name, email, password, confirm_password } = formData

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

  // Handle Form Submit
  const handleOnSubmit = async(e) => {
    e.preventDefault()

    // When button is cicked, update isLoading to true
    setIsLoading(true)

    // send an api request to create a user
    const response = await createUser({
      name: full_name,
      email,
      password,
    })

    // Once you get response, set isLoading to false
    setIsLoading(false)

    // Handle Error
    if(response.status === "error"){
      return toast.error(response.message)
    }

    // Handle Success
    toast.success(response.message)
  }

  return ( 
    <Form onSubmit={handleOnSubmit}>
      <InputField 
        label="Name"
        inputFieldAttributes={{
          type: 'text',
          name: 'full_name',
          placeholder: 'Enter your full name',
          required: true,
          value: full_name,
          onChange: handleOnChange
        }}
      />

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

      <InputField 
        label="Confirm Password"
        inputFieldAttributes={{
          type: 'password',
          name: 'confirm_password',
          placeholder: 'Confirm password',
          required: true,
          value: confirm_password,
          onChange: handleOnChange
        }}
      />
      
      <Button 
        variant="primary" 
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? 'Signing Up...' : 'Sign Up'}
      </Button>
    </Form>
   );
}
 
export default SignupForm;