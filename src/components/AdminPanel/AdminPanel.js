import React,{useEffect, useState} from "react";
import AddEvent from "../AddEvent/AddEvent";
import SideNav from "../SideNav/SideNav";
import "./AdminPanel.css";
import bg from "../../logos/Group 1329.png";
import Nav from "react-bootstrap/Nav";
import logo from "../../logos/Group 1329.png";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "@mui/material";
import { maxWidth } from "@mui/system";

import { Link } from "react-router-dom";
import RegisterList from "../RegisterList/RegisterList";
const AdminPanel = () => {
    const [eventVisibility, setEventVisibility] = useState(true);
    const [registerVisibility, setRegisterVisibility] = useState(false);
    const handleAddEventVisivility = ()=>{
        setEventVisibility(true);
        setRegisterVisibility(false);

    }
    const handleRegisterListVisivility = ()=>{

        setEventVisibility(false);
        setRegisterVisibility(true);

    }
  return (
    <div class="nav">
      <div style={{ backgroundImage: { bg } }}>
        {/* <h2>  nav bar </h2> */}
        <div style={{ backgroundImage: { bg }, margin: 50 }}>
          <Nav defaultActiveKey="/home" className="flex-column">
          <Link to="/home"> <img
              style={{ width: 200 }}
              class="img-style"
              src={logo}
              alt="green iguana"
            /></Link>
           
            {/* <Navbar.Brand href="/admin"> Add  Event</Navbar.Brand>
      <Nav.Link href="/home">  
      
      <img class="img-style" src={logo} alt="green iguana"/>  </Nav.Link> */}

            <Button
              style={{
                margin: "10px",

                color: "success",
              }}
              variant="contained"
              color="success"
              onClick={handleAddEventVisivility}
            >
              Add event
            </Button>

            <Button  onClick={handleRegisterListVisivility}
              style={{
                margin: "10px",

                color: "success",
               
              }}
              variant="contained"
              color="success"
            >
              Register List
            </Button>

           
          </Nav>
        </div>

        {/* <SideNav>    </SideNav> */}
      </div>

      <div class="div-col">
        {eventVisibility&&(
         <AddEvent></AddEvent>
        )}
        {registerVisibility&&(
                  <RegisterList></RegisterList>
        )}

       
       
      </div>
    </div>
  );
};

export default AdminPanel;
