import { GridRowSelectionModel } from "@mui/x-data-grid";
import { createContext } from "react";

export const SelectedContext = createContext<{
  selected: GridRowSelectionModel;
  updateSelected: (selectedOrders: GridRowSelectionModel) => void;
}>({
  selected: [],
  updateSelected: () => {},
});
