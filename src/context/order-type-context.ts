import { GridRowSelectionModel } from "@mui/x-data-grid";
import { createContext } from "react";
import { OrderType } from "../pages/types";

export const ORDER_TYPE = {
  STANDARD: "Standard",
  SALE_ORDER: "SaleOrder",
  PURCHASE_ORDER: "PurchaseOrder",
  TRANSFER_ORDER: "TransferOrder",
  RETURN_ORDER: "ReturnOrder",
};

export const OrderTypeContext = createContext<{
  selectedOrderType: OrderType;
  updateOrderType: (updatedOrderType: OrderType) => void;
}>({
  selectedOrderType: "Standard",
  updateOrderType: () => {},
});
