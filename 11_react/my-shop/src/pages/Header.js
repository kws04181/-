import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstap CSS 추가
import { useNavigate, Outlet } from "react-router-dom";


function Header(props) {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <Navbar bg="light" variant="light" >
          <Container>
            <Navbar.Brand
              href="#home"
              onClick={() => { navigate('/'); }}
            >Seong</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={() => { navigate('/'); }}>Home</Nav.Link>
              <Nav.Link onClick={() => { navigate('/cart'); }}>Shopping Basket</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>

      <Outlet />
    </>
  );
}

export default Header;