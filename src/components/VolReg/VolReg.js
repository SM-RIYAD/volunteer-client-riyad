import React, { useContext } from "react";

import "./VolReg.css";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import logo from "../../logos/Group 1329.png";

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
  const { postid } = useParams();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const eventDetails = {
      name: data.fullname,
      description: data.description,
      event_name: data.event,
      email: data.email,
      date: data.date,
    };

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
        console.log("data in vol reg", data);
        console.log("data added");
        alert("volunteer added!");
      });
    navigate("/voldetails");
  };
  return (
    <div className="reg-main-div pb-5 background-row row">
      {/* <div className=" d-flex justify-content-center "  >
      
        <img className="mt-5 me-5 "
        
          style={{ width: 200 }}
          class="img-style"
          src={logo}
          alt="green iguana"
        />
      </div> */}


      {/* <div className="    d-"> */}
        <div className="col-md-5 d-flex">
          <div className=" m-5 d-flex align-items-center  ">
            <Link style={{ textDecoration: "none" }} to="/home">
              <img
                className=" m-5 d-flex align-items-center "
                style={{
                  width: 300,
                  backgroundSize: "cover",
                  background: "no-repeat",
                }}
                class="img-style"
                src={logo}
                alt="green iguana"
              />
            </Link>
          </div>
        </div>
        <div className=" vol-shadow col-md-6 m-5 ">
          <h1 className="text-secondary m-5">Register as a Volunteer</h1>
          <div className="ms-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* <label for="fname">Full name:</label> */}
              <input
                placeholder="Full Name"
                className="m-4 vol-shadow"
                {...register("fullname", { required: true })}
                // defaultValue={loggedIn.displayName}
              />
              {errors.name && <span className="error">Title is required</span>}
              {/* <label for="fname">Email:</label> */}

              <input
                className="m-4 vol-shadow"
                placeholder="Email"
                value={loggedInUser.email}
                {...register("email", { required: true })}
                // defaultValue={loggedIn.email}
                // placeholder="Your Email"
              />
              {errors.email && (
                <span className="error">Description is required</span>
              )}
              {/* <label for="fname">Descriptipon:</label> */}
              <input
                placeholder="Description"
                className="m-4 vol-shadow"
                type="text"
                {...register("description", { required: true })}
                // placeholder="Your Address"
              />
              {errors.address && (
                <span className="error">Image is required</span>
              )}
              {/* <label for="fname">Date:</label> */}
              <input
                className="m-4 vol-shadow"
                type="date"
                placeholder="Date"
                {...register("date", { required: true })}
                // placeholder="Your Phone Number"
              />
              {errors.phone && <span className="error">Date is required</span>}
              {/* <label for="fname">Event name:</label> */}
              <input
                placeholder="Event Name"
                className="m-4 vol-shadow"
                value={postid}
                type="text"
                {...register("event", { required: true })}
                // placeholder="Your Address"
              />

              <button className=" btn btn-brand m-4  " type="submit">
                {" "}
                Register
              </button>

              {/* <input   className="m-4 " type="submit" > Register</input> */}
            </form>
          </div>
        </div>
        {/* <div className="col-md-3">
          <h1>hlw</h1>
        </div> */}
      {/* </div> */}
    </div>

    ///separate

    // <div className="ship-form">
    //   <div className="register" style={{ margin: 100 }}>
    //     <h2
    //       style={{
    //         paddingLeft: 100,
    //         paddingTop: 20,
    //         paddingBottom: 50,
    //         color: "rgb",
    //       }}
    //     >
    //       Register as a Volunteer
    //     </h2>
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //       <label for="fname">Full name:</label>
    //       <input
    //         {...register("fullname", { required: true })}
    //         // defaultValue={loggedIn.displayName}
    //       />
    //       {errors.name && <span className="error">Title is required</span>}
    //       <label for="fname">Email:</label>

    //       <input
    //         value={loggedInUser.email}
    //         {...register("email", { required: true })}
    //         // defaultValue={loggedIn.email}
    //         // placeholder="Your Email"
    //       />
    //       {errors.email && (
    //         <span className="error">Description is required</span>
    //       )}
    //       <label for="fname">Descriptipon:</label>
    //       <input
    //         type="text"
    //         {...register("description", { required: true })}
    //         // placeholder="Your Address"
    //       />
    //       {errors.address && <span className="error">Image is required</span>}
    //       <label for="fname">Date:</label>
    //       <input
    //         type="date"
    //         {...register("date", { required: true })}
    //         // placeholder="Your Phone Number"
    //       />
    //       {errors.phone && <span className="error">Date is required</span>}
    //       <label for="fname">Event name:</label>
    //       <input
    //         value={postid}
    //         type="text"
    //         {...register("event", { required: true })}
    //         // placeholder="Your Address"
    //       />
    //       {/* <button  className='submit' type="submit"> Register</button> */}
    //       <input className="submit" type="submit" />
    //     </form>
    //   </div>
    // </div>
  );
};

export default VolReg;
