import { useEffect, useState } from "react";
import CreateOrder from "../components/CreateOrder/CreateOrder";
import DeleteSelected from "../components/DeleteSelected/DeleteSelected";
import OrderList from "../components/OrderList/OrderList";
import OrderTypeMenu from "../components/OrderTypeMenu/OrderTypeMenu";
import SearchBar from "../components/SearchBar/SearchBar";

function Home() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    let loadedOrders = async () => {
      fetch("https://red-candidate-web.azurewebsites.net/api/Orders", {
        headers: {
          ApiKey: "b7b77702-b4ec-4960-b3f7-7d40e44cf5f4",
        },
      })
        .then((data) => {
          return data.json();
        })
        .then((responseData) => {
          setOrders(responseData);
          console.log("responseData: ", responseData);
        });
    };

    loadedOrders();
  }, []);

  return (
    <div className="">
      <SearchBar />
      <CreateOrder />
      <DeleteSelected />
      <OrderTypeMenu />
      <OrderList orders={orders} />
    </div>
  );
}

export default Home;
