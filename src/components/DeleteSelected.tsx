import Button from "@mui/material/Button";
import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { SelectedContext } from "../context/selected-context";
import { useHttpClient } from "../hooks/useHttpClient";

const DeleteSelected = (props: { updateOrderList: () => void }) => {
  const { sendRequest } = useHttpClient();
  const selected = useContext(SelectedContext);
  const selectedArr = [...selected.selected];

  for (let sel of selectedArr) {
    sel = `${sel}`;
  }

  const stringifiedSelectedOrders = JSON.stringify(selectedArr);

  const url = "https://red-candidate-web.azurewebsites.net/api/Orders/Delete";

  const onDeleteHandler = async () => {
    try {
      await sendRequest(url, "POST", stringifiedSelectedOrders, {
        "Content-Type": "application/json",
        ApiKey: process.env.API_KEY,
      });
      await props.updateOrderList();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Button
      variant="contained"
      onClick={onDeleteHandler}
      startIcon={<DeleteIcon />}
    >
      Delete Selected
    </Button>
  );
};

export default DeleteSelected;
