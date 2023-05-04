import { Link } from "react-router-dom";

export default function List({ name, img, to }) {
  return (
    <li className="sideBar-ul">
      <Link to={to}>
        {/* <img src={img} alt="imageName" /> */}
        {img}
        <h3>{name}</h3>
      </Link>
    </li>
  );
}
