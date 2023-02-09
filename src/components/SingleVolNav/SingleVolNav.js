import React from 'react';
import { useContext ,useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../logos/Group 1329.png'
import "../CustomNav/CustomNav.css"
import { Link } from 'react-router-dom';

const SingleVolNav = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
             <Navbar  expand="lg">
      <Container  fluid>
      <Link style={{ textDecoration: "none" }} to="/home">
        <Navbar.Brand >  <img class="img-style" src={logo} alt="green iguana"/></Navbar.Brand> 
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        {/* <Navbar.Collapse id="navbarScroll"> */}
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link  style={{ color:"black", fontStyle:"bold",fontWeight:1000 }}  href="#" disabled>
              {loggedInUser.name}
            </Nav.Link>
            <Link style={{ textDecoration: "none" }} to="/register"> <div class="btcolor"> <Button  style={{ color:'black' }} variant="outline-success" color="success">Register</Button></div> </Link>
           
            <Link style={{ textDecoration: "none" }} to="/admin">
              
            <Button  style={{ margin: '10px',color:'black' }} variant="outline-success">Admin</Button>
            </Link>
           
            
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
                {/* <Button variant="outline-success">Search</Button>
            <Button variant="outline-success">Search</Button> */}
          {/* </Form> */}
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
        </div>
    );
};

export default SingleVolNav;