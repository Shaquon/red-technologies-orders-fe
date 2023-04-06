import { Box } from "@mui/material";
import { IOrders } from "../pages/types";
import Card from "@mui/material/Card";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useContext, useEffect, useState } from "react";
import { SelectedContext } from "../context/selected-context";

const OrderList = (props: { orders: IOrders[] | [] }) => {
  const selected = useContext(SelectedContext);

  const [rows, setRows] = useState<IOrders[] | []>([]);

  const columns: GridColDef[] = [
    { field: "orderId", headerName: "Order ID", width: 300 },
    { field: "orderType", headerName: "Order Type", width: 250 },
    { field: "customerName", headerName: "Customer", width: 250 },
    { field: "createdDate", headerName: "Creation Date", width: 250 },
    { field: "createdByUserName", headerName: "Created By", width: 250 },
  ];

  useEffect(() => {
    const rowResult = props.orders.map((row) => {
      return row;
    });

    setRows(rowResult);
  }, [props.orders]);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      {props.orders.length === 0 ? (
        <div className="todo-list center">
          <Card>
            <h2>No Orders found. Maybe</h2>
            <button>Create Order</button>
          </Card>
        </div>
      ) : (
        <DataGrid
          getRowId={(row) => row.orderId}
          onRowSelectionModelChange={(newSelection) => {
            selected.updateSelected(newSelection);
          }}
          rows={rows}
          columns={columns}
          pageSizeOptions={[5]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          checkboxSelection
        />
      )}
    </Box>
  );
};

export default OrderList;
