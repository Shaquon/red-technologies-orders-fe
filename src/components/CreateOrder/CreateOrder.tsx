import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useForm, SubmitHandler, useFormState } from "react-hook-form";
import { useHttpClient } from "../../hooks/useHttpClient";
import { useState } from "react";
import {
  Box,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { style } from "@mui/system";
import { IOrders, OrderType } from "../../pages/types";
import { ORDER_TYPE } from "../../context/order-type-context";

type Inputs = {
  OrderType: string;
  CustomerName: string;
  CreatedByUserName: string;
};

const CreateOrder = (props: { updateOrderList: () => void }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const { sendRequest } = useHttpClient();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [orderTypeSelection, setOrderTypeSelection] =
    useState<OrderType>("Standard");

  /*
  "Standard",
  "SaleOrder",
  "PurchaseOrder",
  "TransferOrder",
  "ReturnOrder",
*/

  const { register, handleSubmit, watch, getValues } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    handleCreateOrder(data);
    handleClose();
  };

  const handleCreateOrder = async (data: Inputs) => {
    const url = "https://red-candidate-web.azurewebsites.net/api/Orders";
    try {
      await sendRequest(
        url,
        "POST",
        JSON.stringify({
          OrderType: orderTypeSelection,
          CustomerName: getValues().CustomerName,
          CreatedByUserName: getValues().CreatedByUserName,
        }),
        {
          "Content-Type": "application/json",
          ApiKey: "b7b77702-b4ec-4960-b3f7-7d40e44cf5f4",
        }
      );

      await props.updateOrderList();
    } catch (err) {
      console.log("err", err);
    }
  };
  const handleSelectChange = (event: SelectChangeEvent) => {
    setOrderTypeSelection(event.target.value as OrderType);
  };

  return (
    <div>
      <Button
        onClick={() => {
          handleOpen();
        }}
        variant="contained"
        startIcon={<AddIcon />}
      >
        Create Order
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Order Details
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <InputLabel id="order-type-select-label">Order Type</InputLabel>
              <Select
                labelId="order-type-select-label"
                id="order-type-select"
                value={orderTypeSelection}
                label="Order Type"
                onChange={handleSelectChange}
              >
                <MenuItem value={ORDER_TYPE.STANDARD}>Standard</MenuItem>
                <MenuItem value={ORDER_TYPE.SALE_ORDER}>Sale Order</MenuItem>
                <MenuItem value={ORDER_TYPE.PURCHASE_ORDER}>
                  Purchase Order
                </MenuItem>
                <MenuItem value={ORDER_TYPE.TRANSFER_ORDER}>
                  Transfer Order
                </MenuItem>
                <MenuItem value={ORDER_TYPE.RETURN_ORDER}>
                  Return Order
                </MenuItem>
              </Select>
              <TextField
                id="customer-name"
                label="Customer Name"
                {...(register("CustomerName"), { required: true })}
              />
              <TextField
                id="order-type"
                label="Created By Username"
                {...(register("CreatedByUserName"), { required: true })}
              />
              <Button type="submit">Submit</Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateOrder;
