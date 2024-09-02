import React from "react";
import Button from "@mui/material/Button";

export default function EditPatient() {
  return (
    <div>
      {/* <button>Edit</button> */}
      <Button variant="contained" onClick={EditPatient}>
        Edit
      </Button>
    </div>
  );
}
