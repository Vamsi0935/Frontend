import React from "react";
import Button from "@mui/material/Button";

export default function EditDoctor() {
  return (
    <div>
      {/* <button>Edit</button> */}
      <Button variant="contained" onClick={EditDoctor}>
        Edit
      </Button>
    </div>
  );
}
