import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteDoctor from "./DeleteDoctor";
import EditDoctor from "./EditDoctor";

export default function Home() {
  const [patients, setDoctors] = useState();
  useEffect(() => {
    axios.get("https://doc-back.onrender.com/doctors").then((res) => {
      console.log(res);
      setDoctors(res.data);
    });
  }, []);
  return patients ? (
    <div className="container">
      {patients.map((doctor) => (
        <div className="patients" key={doctor.id}>
          <p><b>Name: </b>{doctor.name}</p>
          <p><b>Age: </b>{doctor.salary}</p>
          <p><b>Gender: </b>{doctor.gender}</p>
          <p><b>Weight: </b>{doctor.age}</p>
          <p><b>Specialization: </b>{doctor.specialization}</p>
          <EditDoctor />
          <DeleteDoctor id={doctor.id} />
        </div>
      ))}
    </div>
  ) : (
    "loading..."
  );
}

