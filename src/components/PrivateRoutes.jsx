/* eslint-disable react/prop-types */
import { Navigate } from "react-router";

const PrivateRoutes = (props) => {

  const { user, children } = props
  // Check if user exists/ is authenticated
  // if not reuturn back, because this is private route
  const isAuthenticated = user?.id

  return isAuthenticated ? children : <Navigate to="/login" />
}
 
export default PrivateRoutes;