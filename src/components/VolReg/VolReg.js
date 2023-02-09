import React,{ useContext } from 'react';

import "./VolReg.css"
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams

} from "react-router-dom";

// The following component is an example of your existing Input Component
const Input = ({ label, register, required }) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </>
);

// you can use React.forwardRef to pass the ref too
const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
));

const VolReg = () => {
  const navigate = useNavigate();
  const {postid}= useParams();
  
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => { 
             const eventDetails ={  name: data.fullname,
                                       description:data.description,
                                       event_name: data.event,
                                       email: data.email,
                                       date: data.date
                                       
    
     
    
             }
    
        console.log(eventDetails);
        fetch("http://localhost:5000/addvolunteer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(eventDetails),
        })
          .then((res) => res.json())
          .then((data) => {
              alert("volunteer added!");
              console.log("data", data);
              console.log("data added");
            
          });
          navigate('/voldetails');
      }
    return (
        <div className="ship-form" >
 <div  className="register"  style={{margin:100 }}> 
             <h2 style={{paddingLeft:100,paddingTop:20,paddingBottom:50,color:"rgb"}} >Register as a Volunteer</h2>
          <form  onSubmit={handleSubmit(onSubmit)}>
       <label for="fname">Full name:</label>
      <input
        {...register("fullname", { required: true })}
        // defaultValue={loggedIn.displayName}
       
      />
      {errors.name && <span className="error">Title is required</span>}
      <label for="fname"   >Email:</label>

      <input  value={loggedInUser.email}
        {...register("email", { required: true })}
        // defaultValue={loggedIn.email}
        // placeholder="Your Email"
      />
      {errors.email && <span className="error">Description is required</span>}
      <label for="fname">Descriptipon:</label>
      <input type="text"
        {...register("description", { required: true })}
        // placeholder="Your Address"
      />
      {errors.address && <span className="error">Image is required</span>}
      <label for="fname">Date:</label>
      <input type="date"
        {...register("date", { required: true })}
        // placeholder="Your Phone Number"
      />
      {errors.phone && <span className="error">Date is required</span>}
      <label for="fname">Event name:</label>
      <input value={postid} type="text"
        {...register("event", { required: true })}
        // placeholder="Your Address"
      />
           {/* <button  className='submit' type="submit"> Register</button> */}
      <input className='submit' type="submit" />
    </form>
        </div>
        </div>
       
    );
};

export default VolReg;