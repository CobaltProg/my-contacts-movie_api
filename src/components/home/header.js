import React from 'react';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Header = () => (
  <header>
    <Navbar bg="light" variant="light" className="justify-content-between">
      <Nav className="mr-auto">
        <Navbar.Brand href="#home">Movie.js</Navbar.Brand>
      </Nav>
      <Nav className="">
        <Form inline>
          <FormControl type="email" placeholder="Email" className="mr-sm-2" />
          <FormControl type="password" placeholder="Password" className="mr-sm-2" />
          <Button variant="outline-primary">Submit</Button>
        </Form>
      </Nav>
    </Navbar>
  </header>
);

// Header.propTypes = {
//   title: PropTypes.string.isRequired
// };

export default Header;
