/* eslint-disable react/prop-types */
import { Container, Navbar } from "react-bootstrap";

const TopNavbar = (props) => {
  const { userName } = props
  
  return ( 
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-start">
          <Navbar.Text>
            Signed In As: {userName}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   );
}
 
export default TopNavbar;