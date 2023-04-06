import Home from "./pages/Home";
import Header from "./components/Header/Header";
import { Container } from "@mui/material";
import { SelectedContext } from "./context/selected-context";
import { useCallback, useState } from "react";
import { GridRowSelectionModel } from "@mui/x-data-grid";
import { OrderTypeContext } from "./context/order-type-context";
import { OrderType } from "./pages/types";

function App() {
  const [selected, setSelected] = useState<GridRowSelectionModel>([]);
  const [selectedOrderType, setSelectedOrderType] =
    useState<OrderType>("Standard");

  const updateSelected = useCallback(
    (selectedOrders: GridRowSelectionModel) => {
      setSelected(selectedOrders);
    },
    []
  );

  const changeSelectedType = async (orderType: OrderType) => {
    await setSelectedOrderType(orderType);
  };

  const updateSelectedOrderType = useCallback((orderType: OrderType) => {
    changeSelectedType(orderType);
  }, []);

  return (
    <OrderTypeContext.Provider
      value={{
        selectedOrderType: selectedOrderType,
        updateOrderType: updateSelectedOrderType,
      }}
    >
      <SelectedContext.Provider
        value={{
          selected: selected,
          updateSelected: updateSelected,
        }}
      >
        <Container maxWidth="xl" sx={{ backgroundColor: "white" }}>
          <Header />
          <Home />
        </Container>
      </SelectedContext.Provider>
    </OrderTypeContext.Provider>
  );
}

export default App;
