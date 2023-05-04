import * as React from "react";
import "./Order.scss";

import { DataGrid } from "@mui/x-data-grid";
import { Search } from "../../Assets/Svgs";
const columns = [
  { field: "id", headerName: "Order#", width: 143 },
  { field: "date", headerName: "Date", width: 288 },
  {
    field: "status",
    headerName: "Status",
    width: 261,
    renderCell: (params) => (
      <span
        className={
          params.value === "completed"
            ? "completed"
            : params.value === "processing"
            ? "processing"
            : params.value === "cancelled"
            ? "cancelled"
            : ""
        }
      >
        {params.value}
      </span>
    ),
  },
  {
    field: "price",
    headerName: "Price",
    width: 214,
  },
  {
    field: "cart",
    headerName: "Cart",
    width: 220,
    renderCell: () => <button className="placeorder">View Order</button>,
  },
];

const rows = [
  { id: "#711", status: "completed", date: "January 28, 2016", price: "$120" },
  {
    id: "#649",
    status: "processing",
    date: "October 26, 2015",
    price: " $180",
  },
  {
    id: "#588",
    status: "completed",
    date: "September 4, 2015",
    price: " $120",
  },
  { id: "#550", status: "processing", date: "June 23, 2015", price: "$130" },
  { id: "#450", status: "cancelled", date: "April 2, 2015", price: "$140" },
  {
    id: "#449",
    status: "completed",
    date: "September 4, 2015",
    price: " $120",
  },
  { id: "#447", status: "completed", date: "April 1, 2015", price: "$120 " },
  { id: "#557", status: "processing", date: "June 23, 2015", price: "$120 " },
  { id: "#364", status: "cancelled", date: "April 2, 2015", price: "$120 " },
  { id: "#440", status: "processing", date: "April 2, 2015", price: "$120 " },
  { id: "#522", status: "cancelled", date: "April 1, 2015", price: "$120 " },
];
const MyOrder = () => {
  return (
    <>
      <div className="myOrder">
        <div className="oderlist">
          <h1>Oder List</h1>
          <span>
            <Search />
          </span>
          <input type="search" placeholder="Search" />
        </div>
        <div className="table">
          <div style={{ height: 680, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              pageSizeOptions={[5, 10]}
              // checkboxSelection
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrder;
