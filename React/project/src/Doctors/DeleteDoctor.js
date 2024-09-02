import axios from "axios";
import Button from "@mui/material/Button";

function DeleteDoctor(props) {
  function deleteDoctor() {
    axios
      .delete(`https://doc-back.onrender.com/patients/${props.id}`)
      .then((res) => {
        alert("Patient deleted successfully");
      });
  }
  return (
    <div className="button">
      {/* <button onClick={deletePatient}>Delete</button> */}
      <Button variant="contained" onClick={deleteDoctor}>
        Delete
      </Button>
    </div>
  );
}
export default DeleteDoctor;
