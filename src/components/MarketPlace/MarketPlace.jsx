import React, { useState } from "react";
import "./market.scss";
// import admin from "../../Assets/adminpic.png";
import avplemedia from "../../Assets/avplemediam.png";
import foxbuiness from "../../Assets/foxbuiness.png";
import ibomman from "../../Assets/ibomman.png";
import people from "../../Assets/people.png";
import techbullion from "../../Assets/techbullion.png";
import sqmc from "../../Assets/sqmc.png";
import techflas from "../../Assets/techflas.png";
import vents from "../../Assets/vents.png";
import wellness from "../../Assets/wellness.png";
import city from "../../Assets/citybreaksle.png";

// import upperarrrow from "../../Assets/uperarrow.png";
import { DataGrid } from "@mui/x-data-grid";
import { Search } from "../../Assets/Svgs";
import TableCell from "../TableCell/TableCell";
import DA from "../DA";
import { Green } from "../../Assets/Svgs";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InvoiceModal from "../InvoiceModal/invoiceModal";

const data = [
  {
    id: 1,
    name: "techbullion.com",
    url: "www.techbullion.com",
    img: techbullion,
    DA: 62,
    DAPercentage: 5,
    positive: true,
    PA: 55,
    traffic: 66.7,
    spamScore: "1.00%",
    price: "$65",
    linkType: "Dofollow",
    arrow: <Green />,
  },
  {
    id: 2,
    name: "wellnesspitch.com",
    url: "www.wellnesspitch.com",
    img: wellness,
    DA: 55,
    DAPercentage: " 4",
    positive: false,
    PA: 55,
    traffic: "65.7k",
    spamScore: "3.00%",
    price: "$65",
    linkType: "Dofollow",
  },
  {
    id: 3,
    name: "citybreakscle.com",
    url: "www.wellnesspitch.com",
    img: city,
    DA: 55,
    DAPercentage: "5",
    positive: true,
    PA: 44,
    traffic: "65.7k",
    spamScore: "0.00%",
    price: "$40",
    linkType: "Dofollow",
  },
  {
    id: 4,
    name: "ventsmagazine.com",
    url: "www.ventsmagazine.com",
    img: vents,
    DA: 62,
    DAPercentage: 5,
    positive: true,
    PA: 55,
    traffic: "65.7k",
    spamScore: "2.00%",
    price: "$65",
    linkType: "Dofollow",
  },
  {
    id: 5,
    name: "foxbusineessplan",
    url: "foxbusineessplan.com",
    img: foxbuiness,
    DA: 44,
    DAPercentage: 4,
    positive: false,
    PA: 44,
    traffic: "65.7k",
    spamScore: "2.00%",
    price: "$120",
    linkType: "Dofollow",
  },
  {
    id: 6,
    name: "avplemedia",
    url: "avplemedia.com",
    img: avplemedia,
    DA: 40,
    DAPercentage: 5,
    positive: true,
    PA: 40,
    traffic: "65.7",
    spamScore: "3.00%",
    price: "$75",
    linkType: "Dofollow",
  },
  {
    id: 7,
    name: "ibommanews",
    url: "www.ibommanews.com",
    img: ibomman,
    DA: 50,
    DAPercentage: 5,
    positive: true,
    PA: 44,
    traffic: "65.7k",
    spamScore: "1.00%",
    price: "$120",
    linkType: "Dofollow",
  },
  {
    id: 8,
    name: "techflas",
    url: "teachflas.com",
    img: techflas,
    DA: 54,
    DAPercentage: 5,
    positive: true,
    PA: 46,
    traffic: "65.7k",
    spamScore: "1.00%",
    price: "$100",
    linkType: "Dofollow",
  },
  {
    id: 9,
    name: "sqmclubs",
    url: "sqmclubs.com",
    img: sqmc,
    DA: 51,
    DAPercentage: 5,
    positive: false,
    PA: 41,
    traffic: "65.7k",
    spamScore: "1.00%",
    price: "$45",
    linkType: "Dofollow",
  },
  {
    id: 10,
    name: "peoplesmagazine.com",
    url: "peoplesmagazine.com",
    img: people,
    DA: 54,
    DAPercentage: 5,
    positive: true,
    PA: 41,
    traffic: "65.7k",
    spamScore: "1.00%",
    price: "$45",
    linkType: "Dofollow",
  },
];

const MarketPlace = () => {
  const [show, setShow] = useState(false);
  const [params, setParams] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (params) => {
    const temp = data.find((item) => item.id === params.id);
    console.log(temp);
    setParams(temp);
    setShow(true);
  };
  const columns = [
    {
      field: "sd",
      headerName: "Site Details",
      width: 246,
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
      field: "da",
      headerName: "DA",
      width: 150,
      renderCell: (params) => params.value,
    },
    {
      field: "status",
      headerName: "PA",
      width: 100,
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
      field: "traffic",
      headerName: "Traffic",
      width: 120,
    },
    {
      field: "spamScore",
      headerName: "Spam Score",
      width: 130,
    },
    {
      field: "Price",
      headerName: "Price",
      width: 120,
    },

    {
      field: "linksite",
      headerName: "Link Sites",
      width: 120,
    },
    {
      field: "cart",
      headerName: "Cart",
      width: 120,
      renderCell: (params) => (
        <button className="placeorder" onClick={() => handleShow(params)}>
          View Order
        </button>
      ),
    },
  ];

  const rows2 = data.map((item) => {
    return {
      id: item.id,
      sd: <TableCell img={item.img} title={item.name} url={item.url} />,
      status: item.PA,
      price: item.price,
      da: (
        <DA
          number={item.DA}
          img={item.arrow}
          per={item.DAPercentage}
          condition={item.positive}
        />
      ),
      traffic: item.traffic,
      spamScore: item.spamScore,
      Price: item.price,
      linksite: item.linkType,
    };
  });

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
              rows={rows2}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              pageSizeOptions={[5, 10]}
            />
          </div>
        </div>
      </div>
      <InvoiceModal handleClose={handleClose} show={show} params={params} />
    </>
  );
};

export default MarketPlace;
