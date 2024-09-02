import React, { useState, useEffect } from "react";
import axios from "axios";
import DeletePatient from "./DeletePatient";
import EditPatient from "./EditPatient";

export default function Home() {
  const [patients, setPatients] = useState();
  useEffect(() => {
    axios.get("https://doc-back.onrender.com/patients").then((res) => {
      console.log(res);
      setPatients(res.data);
    });
  }, []);

  return patients ? (
    <div className="container">
      {patients.map((patient) => (
        <div className="patients" key={patient.id}>
          <p>
            <b>Name: </b>
            {patient.name}
          </p>
          <p>
            <b>Age: </b>
            {patient.age}
          </p>
          <p>
            <b>Gender: </b>
            {patient.gender}
          </p>
          <p>
            <b>Weight: </b>
            {patient.weight}
          </p>
          <p>
            <b>Disease: </b>
            {patient.disease}
          </p>
          <p>
            <b>Doctor Name: </b>
            {patient.doctor}
          </p>
          <EditPatient />
          <DeletePatient id={patient.id} />
        </div>
      ))}
    </div>
  ) : (
    "loading..."
  );
}
