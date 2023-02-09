import React , { useEffect, useState } from 'react';
import TextField from "@mui/material/TextField";

import CustomNav from '../CustomNav/CustomNav';

import '../Home/Home.css'
import VolunteerCards from '../VolunteerCards/VolunteerCards';

const Home = () => {
    const [vols,setVols]=useState([]);
    useEffect( ()=>{ fetch('http://localhost:5000/events')
    .then(response => response.json())
    .then(json => setVols(json))
  
      
  
    },[] )

   
   
   const inputHandler = (e)=>{
    const filter=e.target.value;
    // alert(filter);
    console.log(filter);
    fetch('http://localhost:5000/tasks?filter='+ filter)
    .then(response => response.json())
    .then(json => setVols(json))
  

    }
    
    return (
        <div className='home-div'>
           
        <CustomNav></CustomNav>
        <h3 class="H">Let's do some volunteering !</h3>
        <div >
        {/* <TextField  className="search"
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        /> */}
        <input  className="search"  label="Search" placeholder="Search Here" onChange={inputHandler} type="search"/>
      </div>
        <div class="item">
        { vols.map(vol => <VolunteerCards vols={vol}></VolunteerCards>)}
        </div>
       
       
        {/* <VolunteerCards  vols={vols}> </VolunteerCards>
         */}
        </div>
    );
};

export default Home;