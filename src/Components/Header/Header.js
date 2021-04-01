import { Link } from "react-router-dom";
import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar className='container' bg="none" variant="dark">
        <Navbar.Brand as={Link} to={`/home/`}>Rajjo Bazar</Navbar.Brand>
        <Nav className="mr-auto align-items-end">
          <Nav.Link as={Link} to={`/home/`}>Home</Nav.Link>
          <Nav.Link as={Link} to={`/orderInfo`}>Orders</Nav.Link>
          <Nav.Link as={Link} to={`/admin/addProduct`}>Admin</Nav.Link>
          <Button as={Link} to={`/login/`} variant="outline-info">Login</Button>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
