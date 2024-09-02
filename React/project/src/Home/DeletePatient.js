import axios from "axios";
import Button from "@mui/material/Button";

function DeletePatient(props) {
  function deletePatient() {
    axios
      .delete(`https://doc-back.onrender.com/patients/${props.id}`)
      .then((res) => {
        alert("Patient deleted successfully");
      });
  }
  return (
    <div className="button">
      {/* <button onClick={deletePatient}>Delete</button> */}
      <Button variant="contained" onClick={deletePatient}>
        Delete
      </Button>
    </div>
  );
}
export default DeletePatient;
