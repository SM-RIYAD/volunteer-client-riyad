import React from "react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../../logos/Group 1329.png";
import "../CustomNav/CustomNav.css";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from 'react-router-dom';

const CustomNav = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const [isloggedOut, setIsLoggedOut] = useState(true);
  const navigate = useNavigate();
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#">
            {" "}
            <Link style={{ textDecoration: "none" }} to="/home">
            <img class="img-style" src={logo} alt="green iguana" /> </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          {/* <Navbar.Collapse id="navbarScroll"> */}
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="extra-margin" href="#action1">
              Blog
            </Nav.Link>
            <Nav.Link  style={{
                 
                  
                    width:120,
                 

                  }} className="extra-margin" href="#action2">
              About Us
            </Nav.Link>
            {/* <NavDropdown className="extra-margin" title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {loggedInUser.name && (
              // <Link  style={{ textDecoration: "none" }} to="/voldetails">
               
                <Nav.Link 
                  style={{
                    color: "black",
                    fontStyle: "bold",
                    fontWeight: 1000,
                    width:150,
                    margin:20

                  }}
                  href="#"
               
                  onClick={()=>navigate("/voldetails")}
                 
                >
                  { loggedInUser.name}
                  {/* {loggedInUser.name&&(
                  setIsLoggedIn(true),
                  setIsLoggedOut(false)
               )} */}
                </Nav.Link>
              // </Link>
            )}

            <Link style={{ textDecoration: "none" }} to="/login">
              {" "}
              {/* <div class="btcolor"> */}{" "}
              {!loggedInUser.name && (
                <div class="btcolor">
                  {/* console.log("hi",isloggedIn), */}
                  <Button
                    style={{ color: "white" ,backgroundColor:"rgb(1, 128, 255)",textAlign:"center"}}
                    variant="outline-success"
                    color="success"
                    onClick={() => {
                      setIsLoggedIn(true);
                      setIsLoggedOut(false);
                      // alert("i got clicked")
                    }}
                  >
                   <span style={{margin:"12px"}}> Log in</span>

                   
                  </Button>
                </div>
              )}
            </Link>
            <Link style={{ textDecoration: "none" }} to="/home">
            {loggedInUser.name &&
              (console.log("hello"),
              (   <div class="btcolor"> <Button
              style={{ color: "white" ,backgroundColor:"rgb(1, 128, 255)" }}
              variant="outline-success"
              color="success"
              onClick={() => {
                // alert("i got clicked")
                setLoggedInUser({});
              }}
            >
              <span style={{margin:"12px"}}> Log Out</span>
            </Button></div>
           
               
              ))}</Link>

       

            <Link style={{ textDecoration: "none" }} to="/admin">
            <div class="btcolor">  <Button
                style={{ margin: "10px", color: "white" ,backgroundColor:"rgb(1, 128, 255)"}}
                variant="outline-success"
              >
               <span style={{margin:"12px"}}>Admin</span>
              </Button> </div>
            
            </Link>
          </Nav>
        
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNav;
