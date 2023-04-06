import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useContext, useState } from "react";
import { OrderTypeContext, ORDER_TYPE } from "../context/order-type-context";
import { OrderType } from "../pages/types";

const OrderTypeMenu = (props: { updateOrdersByType: () => void }) => {
  const orderTypeContext = useContext(OrderTypeContext);

  const handleSelectionChange = (event: SelectChangeEvent) => {
    orderTypeContext.updateOrderType(event.target.value as OrderType);
    props.updateOrdersByType();
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="order-type-select">Order Type</InputLabel>
      <Select
        labelId="order-type-select"
        id="order-type-select"
        value={orderTypeContext.selectedOrderType}
        label="Order Type"
        onChange={handleSelectionChange}
      >
        <MenuItem value={ORDER_TYPE.STANDARD}>Standard Order</MenuItem>
        <MenuItem value={ORDER_TYPE.TRANSFER_ORDER}>Transfer Order</MenuItem>
        <MenuItem value={ORDER_TYPE.PURCHASE_ORDER}>Purchase Order</MenuItem>
        <MenuItem value={ORDER_TYPE.SALE_ORDER}>Sale Order</MenuItem>
        <MenuItem value={ORDER_TYPE.RETURN_ORDER}>Return Order</MenuItem>
      </Select>
    </FormControl>
  );
};

export default OrderTypeMenu;
