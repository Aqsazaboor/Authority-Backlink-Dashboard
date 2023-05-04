import { Plus, Ringbell } from "../../Assets/Svgs";
import "./Header.scss";
import adminimg from "../../Assets/adminpic.png";
// import plusicon from "../../Assets/plusicon.png";
import { useEffect } from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="heder-Section">
        <div className="title">
          <h1>My Orders</h1>
        </div>
        <div className="notificition ">
          <button>{<Ringbell />}</button>
          <img src={adminimg} alt="admin image" />
          <button className="plus">
            <Plus />
            <span>$120</span>
          </button>
        </div>
      </div>
    </div>
  );
}
