import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHttpClient } from "../../hooks/useHttpClient";
import { useState } from "react";
import { Box, Modal, TextField, Typography } from "@mui/material";
import { style } from "@mui/system";
import { IOrders } from "../../pages/types";

type Inputs = {
  OrderType: string;
  CustomerName: string;
  CreatedByUserName: string;
};

const CreateOrder = () => {
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => handleCreateOrder(data);

  console.log(watch("OrderType"));

  const handleCreateOrder = async (data: Inputs) => {
    const url = "https://red-candidate-web.azurewebsites.net/api/Orders";

    try {
      await sendRequest(
        url,
        "POST",
        JSON.stringify({
          OrderType: "Standard",
          CustomerName: "sdsd",
          CreatedByUserName: "dsds",
        }),
        {
          "Content-Type": "application/json",
          ApiKey: "b7b77702-b4ec-4960-b3f7-7d40e44cf5f4",
        }
      );
    } catch (err) {
      console.log("err", err);
    }
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
              <TextField
                id="order-type"
                label="Order Type"
                {...(register("OrderType"), { required: true })}
              />
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
