import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const CreateOrder = () => {
  return (
    <Button variant="contained" startIcon={<AddIcon />}>
      Create Order
    </Button>
  );
};

export default CreateOrder;
