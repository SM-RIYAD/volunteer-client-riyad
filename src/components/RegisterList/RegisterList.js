import React from "react";
import { useEffect, useState } from "react";
import "../RegisterList/RegisterList.css";
import "../../App.css";
import Table from "react-bootstrap/Table";

const RegisterList = () => {
  const [visibility, setVisibility] = useState(true);
  const [regVols, setRegVols] = useState([]);
  const handleVolDelete = (iid) => {
    console.log("i got clicked! id:", iid);
    console.log("this is id in delete ", iid);
    fetch(`http://localhost:5000/singledelete/${iid}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        // if(result){e.target.parentNode.style.display='none';}
        if (result) {
          console.log(visibility);

          fetch("http://localhost:5000/regvols")
            .then((response) => response.json())
            .then((json) => setRegVols(json));
        }
        console.log("deleted succesfully!");
      });
    alert("volunteer deleted!");
  };

  useEffect(() => {
    fetch("http://localhost:5000/regvols")
      .then((response) => response.json())
      .then((json) => setRegVols(json));
  }, []);
  console.log("Regvols: ", regVols);
  return (
    <div className="margin-div">
      <div className="App">
        <Table bordered striped size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email ID</th>
              <th>Registering Date</th>
              <th>Volunteer List</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {regVols.map((item) => (
              <tr class="table-margin">
                <td class="table-margin">{item.name}</td>
                <td>{item.email}</td>
                <td>{item.date}</td>
                <td>{item.event_name}</td>
                <td
                
                  className=""
                >

                   {/* <img src="../../logos/trash-2\ 9.png" alt="" /> */}
                   <button class="btn-del" onClick={() => {
                    handleVolDelete(item._id);
                    console.log(item._id);
                  }}> <i class="fa fa-trash"></i></button>

                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default RegisterList;
