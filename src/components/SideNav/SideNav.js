import React from "react";
import Nav from "react-bootstrap/Nav";
import logo from "../../logos/Group 1329.png";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "@mui/material";
import { maxWidth } from "@mui/system";
import bg from "../../logos/Group 1329.png";
import { Link } from "react-router-dom";
const SideNav = () => {
  return (
    <div style={{ backgroundImage: { bg }, margin: 50 }}>
      <Nav defaultActiveKey="/home" className="flex-column">
        <img
          style={{ width: 200 }}
          class="img-style"
          src={logo}
          alt="green iguana"
        />
        {/* <Navbar.Brand href="/admin"> Add  Event</Navbar.Brand>
      <Nav.Link href="/home">  
      
      <img class="img-style" src={logo} alt="green iguana"/>  </Nav.Link> */}
        <Link to="/home" style={{ textDecoration: "none" }}>
          <Button
            style={{
              margin: "10px",

              color: "success",
            }}
            variant="contained"
            color="success"
          >
            Add event
          </Button>
        </Link>
        <Link to="/registerlist" style={{ textDecoration: "none" }}>
          <Button
            style={{
              margin: "10px",

              color: "success",
            }}
            variant="contained"
            color="success"
          >
            Register List
          </Button>
        </Link>
        {/* <Link to="/registerlist" style={{ textDecoration: "none" }}>
      <Button  style={{ margin: '5px',
    maxWidth:200,
    color:"success"}} color="success" variant="outline-success">Register List</Button>
   
      </Link> */}

        {/* <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link> */}
      </Nav>
    </div>
  );
};

export default SideNav;
