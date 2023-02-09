import React from "react";
import "./AddEvent.css";
import { useForm } from "react-hook-form";

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

const AddEvent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const eventDetails = {
      title: data.title,
      description: data.description,
      // image: data.image,
      date: data.date,
    };

    console.log("e details: ",eventDetails);
   
    fetch("http://localhost:5000/addevent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventDetails),
    })
      .then((res) => res.json())
      .then((data) => {
          alert("event added!");
          console.log("data", data);
          console.log("data added");
        
      });
  };
  // <Input label="First Name" register={register} required />

  return (
    <div className="ship-form" style={{ margin: 100 }}>
      <h1  style={{
             

                color: "gray",
                fontFamily:"cursive",
                marginLeft:150,
                marginBottom:50

               
              }}>Adding Event</h1>
      <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
        <label for="fname">Event title</label>
        <input
          {...register("title", { required: true })}
          // defaultValue={loggedIn.displayName}
        />
        {errors.name && <span className="error">Title is required</span>}
        <label for="fname">Description:</label>

        <input
          style={{ height: 100 }}
          {...register("description", { required: true })}
          // defaultValue={loggedIn.email}
          // placeholder="Your Email"
        />
        {errors.email && <span className="error">Description is required</span>}
        {/* <label for="fname">Banner</label>
        <input
          type="file"
          {...register("image", { required: false })}
          // placeholder="Your Address"
        /> */}
        {errors.address && <span className="error">Image is required</span>}
        <label for="fname">Date</label>
        <input
          type="date"
          {...register("date", { required: true })}
          // placeholder="Your Phone Number"
        />
        {errors.phone && <span className="error">Date is required</span>}

        <input className="submit" type="submit" />
              
      </form>
    </div>
  );
};

export default AddEvent;
