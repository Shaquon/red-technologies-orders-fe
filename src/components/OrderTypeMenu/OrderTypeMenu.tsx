import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const OrderTypeMenu = () => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="order-type-select">Order Type</InputLabel>
      <Select
        labelId="order-type-select"
        id="order-type-select"
        value="Order Type"
        label="Order Type"
      >
        <MenuItem value="standard">
          <em>Standard</em>
        </MenuItem>
        <MenuItem value={"Sale Order"}>Sale Order</MenuItem>
        <MenuItem value={"Purchase Order"}>Purchase Order</MenuItem>
        <MenuItem value={"Transfer Order"}>Transfer Order</MenuItem>
        <MenuItem value={"Return Order"}>Return Order</MenuItem>
      </Select>
    </FormControl>
  );
};

export default OrderTypeMenu;
