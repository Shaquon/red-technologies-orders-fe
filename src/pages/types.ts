export interface IOrders {
  createdByUserName: string;
  createdDate: string;
  customerName: string;
  orderId: string;
  orderType: OrderType;
}

const ORDER_TYPE = {
  STANDARD: "Standard",
  SALE_ORDER: "SaleOrder",
  PURCHASE_ORDER: "PurchaseOrder",
  TRANSFER_ORDER: "TransferOrder",
  RETURN_ORDER: "ReturnOrder",
} as const;

type ObjectValues<T> = T[keyof T];

export type OrderType = ObjectValues<typeof ORDER_TYPE>;
