import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form,  FormControl, Button} from 'react-bootstrap';

export default class Header extends Component {

  render() {
    return (

<Navbar expand="lg" variant="dark" bg="dark">
<Navbar.Brand href="#home">Hashtag Logo</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item>Action</NavDropdown.Item>
          <NavDropdown.Item>Another action</NavDropdown.Item>
          <NavDropdown.Item>Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
</Navbar.Collapse>
</Navbar>
    )
  }
 
}
