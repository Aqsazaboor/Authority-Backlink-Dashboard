import Authortylogo from "../../Assets/authoritylogo.png";

// import setting from "../../Assets/setting.png";
// import logout from "../../Assets/logout.png";

import "./Sidebar.scss";
import List from "./List";
import {
  Funds,
  Invoice,
  MarketPlace,
  Mysite,
  OrderIcon,
  Setting,
  Singout,
} from "../../Assets/Svgs";

const lists = [
  {
    id: 1,
    img: <OrderIcon />,
    name: "My Order",
    to: "/",
  },
  {
    id: 2,
    name: "MarketPlace",
    img: <MarketPlace />,
    to: "/marketplace",
  },
  {
    id: 3,
    name: "My site",
    img: <Mysite />,
    to: "/newsites",
  },
  {
    id: 4,
    name: "Funds",
    img: <Funds />,
    to: "/funds",
  },
  {
    id: 4,
    name: "Invoice",
    img: <Invoice />,
    to: "/invoice",
  },
];
export default function Sidebar() {
  return (
    <>
      <div className="sideBar">
        <div className="logo">
          <img src={Authortylogo} alt="" />
        </div>

        <ul className="sideBar-ul">
          {lists.map((item, id) => {
            return (
              <List key={id} name={item.name} img={item.img} to={item.to} />
            );
          })}
        </ul>

        <div className="sideBar-Footer">
          <ul>
            <li>
              <Setting />
              <span>Setting</span>
            </li>
            <li>
              <Singout />
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
