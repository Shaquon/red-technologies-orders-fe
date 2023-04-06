import { Box, CircularProgress, Container, Divider } from "@mui/material";
import { useCallback, useContext, useEffect, useState } from "react";
import CreateOrder from "../components/CreateOrder/CreateOrder";
import DeleteSelected from "../components/DeleteSelected/DeleteSelected";
import OrderList from "../components/OrderList/OrderList";
import OrderTypeMenu from "../components/OrderTypeMenu/OrderTypeMenu";
import SearchBar from "../components/SearchBar/SearchBar";
import { OrderTypeContext } from "../context/order-type-context";
import { IOrders, OrderType } from "./types";

function Home() {
  const [orders, setOrders] = useState<IOrders[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [filtered]
  const orderType = useContext(OrderTypeContext);

  const loadedOrders = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://red-candidate-web.azurewebsites.net/api/Orders",
        {
          headers: {
            ApiKey: "b7b77702-b4ec-4960-b3f7-7d40e44cf5f4",
          },
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message);
      }

      setIsLoading(false);
      setOrders(responseData);
    } catch (err) {
      console.log(err);
    }
  };

  const updateOrdersByType = () => {
    const filteredOrders = orders.filter((order) => {
      return order.orderType === orderType.selectedOrderType;
    });
    setOrders(filteredOrders);
  };

  useEffect(() => {
    loadedOrders();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "white" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        <SearchBar />
        <CreateOrder updateOrderList={loadedOrders} />
        <DeleteSelected updateOrderList={loadedOrders} />
        <OrderTypeMenu updateOrdersByType={updateOrdersByType} />
      </Box>
      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <CircularProgress />
        </Box>
      )}
      {!isLoading && <OrderList orders={orders} />}
    </Container>
  );
}

export default Home;
