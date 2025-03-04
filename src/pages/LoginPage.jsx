import { Col, Container, Row, Stack } from "react-bootstrap";
import LoginForm from "../components/LoginForm";

const LoginPage = (props) => {
  // eslint-disable-next-line react/prop-types
  const { setUser } = props

  return ( 
    <Container>
      <Row className="d-flex align-items-center justify-content-center vh-100">
        {/* Column One */}
        <Col>
          <Stack className="shadow-lg border rounded p-4">
            <h1>Welcome Back!!</h1>
            <p>Manage your income and expenses</p>
            <p>Track Your Finance</p>
          </Stack>
        </Col>

        {/* Column One */}
        <Col>
          {/* Login Form */}
          <Stack className="shadow-lg border rounded p-4">
            <h1>Login</h1>
            
            <LoginForm setUser={setUser}/>
          </Stack>
        </Col>
      </Row>
    </Container>
   );
}
 
export default LoginPage;