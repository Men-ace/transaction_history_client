import { Col, Container, Row, Stack } from "react-bootstrap";
import SignupForm from "../components/SignupForm";

const SignupPage = () => {
  return ( 
    <Container>
      <Row className="d-flex align-items-center justify-content-center vh-100">
        {/* Column One */}
        <Col>
          <Stack className="shadow-lg border rounded p-4">
            <h1>Join Our App</h1>
            <p>Manage your income and expenses</p>
            <p>Track Your Finance</p>
          </Stack>
        </Col>

        {/* Column One */}
        <Col>
          {/* Signup Form */}
          <Stack className="shadow-lg border rounded p-4">
            <h1>Sign Up</h1>
            
            <SignupForm />
          </Stack>
        </Col>
      </Row>
    </Container>
   );
}
 
export default SignupPage;