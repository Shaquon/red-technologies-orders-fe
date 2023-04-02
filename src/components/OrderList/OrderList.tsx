import { List } from "@mui/material";
import styles from "./OrderList.module.css";


interface OrderProps {
  orders: {
    createdByUserName: string;
    createdDate: string;
    customerName: string;
    orderId: string;
    orderType: string;
  };
}

const OrderList = (props: OrderProps) => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {props.orders.map(
        (order: {
          createdByUserName: string;
          createdDate: string;
          customerName: string;
          orderId: string;
          orderType: string;
        }) => {
          return order;
        }
      )}
    </List>
  );
};

export default OrderList;
