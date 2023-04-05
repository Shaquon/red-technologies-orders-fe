import Button from "@mui/material/Button";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteSelected = (props: { selectedItems: string[] }) => {
  return (
    <Button variant="contained" startIcon={<DeleteIcon />}>
      Delete Selected
    </Button>
  );
};

export default DeleteSelected;
