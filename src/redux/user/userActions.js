// export const loginUserAction = () => { 
//   return () => {}
// }

import { toast } from "react-toastify"
import { loginUser } from "../../axios/userAxios"
import { setUser } from "./userSlice"

export const loginUserAction = (email, password) => async(dispatch) => {

  // build the payload
  // send api request to try login
    const response = await loginUser(email, password)

  // Handle Error
  if(response.status === 'error'){
    return toast.error(response.message)
  }

  // Handle Success
  // show toast message
  toast.success(response.message)

  // dispatch an action to update user state in redux
  dispatch(setUser(response.data))
}