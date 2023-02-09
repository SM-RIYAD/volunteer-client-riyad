import logo from './logo.svg';
import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Home from './components/Home/Home';
import Voldetails from './components/Voldetails/Voldetails';
import AdminPanel from './components/AdminPanel/AdminPanel';
import Login from './components/Login/Login';
import VolReg from './components/VolReg/VolReg';
import RegisterList from './components/RegisterList/RegisterList';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();


function App() {
  const [loggedInUser,setLoggedInUser]= useState({});
  return (
    <div>
   <UserContext.Provider value={[loggedInUser,setLoggedInUser]}> 
         
         <Router>
         <Routes>
         <Route  element={< PrivateRoute/>}>
         {/* <Route path="/voldetails/:postid" element={<Voldetails />} />{" "} */}
         <Route  path="/register/:postid" element={<VolReg/>} />
         </Route>
           {/* <Route  path="/voldetails/:postid" element={<Voldetails/>} />{" "} */}
           <Route  path="/admin" element={<AdminPanel/>} />
           {/* <Route  path="/register" element={<VolReg/>} /> */}
           <Route path="/voldetails" element={<Voldetails />} />
           <Route  path="/registerlist" element={<RegisterList/>} />
           <Route  path="/login" element={<Login/>} />
           {/* <Route  path="/home" element={<Home/>} /> */}
            <Route  path="*" element={<Home />} />
            {/* <Route  path="*" element={<VolReg/>} /> */}
            
         </Routes>
       </Router>
       
       </UserContext.Provider>
    </div>
 
  );
}

export default App;
