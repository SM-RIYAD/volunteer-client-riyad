import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./SingleVols.css";
const SingleVols = (props) => {
  const [visibility, setVisibility] = useState(true);
  console.log("this is in single vols", props);
  const handleDeleting = (e) => {
    console.log("this is id in delete ", props.sevent._id);
    fetch(`http://localhost:5000/singledelete/${props.sevent._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        // if(result){e.target.parentNode.style.display='none';}
        if (result) {
          console.log(visibility);
          setVisibility(false);
        }
        console.log("deleted succesfully!");
      });
    alert("volunteer deleted!");
  };
  return (
    <>
    { visibility && (
       <div class=" single-card">
      
       <div class="row d-flex  justify-content-between ">
         <div class="col-6 d-flex ">
           <div class="container d-flex justify-content-center img-margin">
             {/* <p class="padding-for-last-part last-font">Millions of people of all ages and from around
     the world are improving their lives with us</p> */}
             <img
               class=" simage"
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRecq0bomrTnVSN4KqHKQ3ZBc-s1T8SmREGEQ&usqp=CAU"
             ></img>
           </div>
         </div>
         <div class="col-3 d-flex align-items-center">
           <div class="container ">
             <h3>{props.sevent.event_name}</h3>
             {new Date(props.sevent.date).toDateString()}
           </div>
         </div>
         <div class="col-3 d-flex align-items-end">
           <div class="container ">
             <button onClick={handleDeleting} className="cancel">
               Cancel{" "}
             </button>
           </div>
         </div>
       </div>
     </div>

    )}
    
    </>
   
  );
};

export default SingleVols;
