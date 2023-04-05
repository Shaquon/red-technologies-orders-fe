import Home from "./pages/Home";
import Header from "./components/Header/Header";
import { Container } from "@mui/material";
import { SelectedContext } from "./context/selected-context";
import { useCallback, useState } from "react";
import { GridRowSelectionModel } from "@mui/x-data-grid";

function App() {
  const [selected, setSelected] = useState<GridRowSelectionModel>([]);

  const updateSelected = useCallback(
    (selectedOrders: GridRowSelectionModel) => {
      setSelected(selectedOrders);
    },
    []
  );

  return (
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
  );
}

export default App;
