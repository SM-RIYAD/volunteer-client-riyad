import React,{ useContext ,useEffect, useState } from 'react';
import { UserContext } from '../../App';
import SingleVols from '../../SingleVols/SingleVols';
import CustomNav from '../CustomNav/CustomNav';
import SingleVolNav from '../SingleVolNav/SingleVolNav';
import "../Voldetails/Voldetails.css"
const Voldetails = () => {

       
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [events,setEvents]=useState([]);
    useEffect( ()=>{
  
      fetch('http://localhost:5000/userevents?email='+loggedInUser.email)
      .then(response => response.json())
      .then(json => setEvents(json))
  
    },[] )

    console.log("selected events",events);

    return (
        <div className='home-div'>
            {/* <SingleVolNav></SingleVolNav> */}
            <CustomNav></CustomNav>
            {/* user : {loggedInUser.email}
            <br />
            there are {events.length} vols
            <h1>this is vol details hi</h1> */}
            <div className='display-single'>
            { events.map(event =>   <SingleVols sevent={event}></SingleVols>)}
          
          
            </div>
           
          

        </div>
    );
};

export default Voldetails;