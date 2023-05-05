import React from "react";
import "./da.scss";
import { Green } from "../Assets/Svgs";

function DA({ number, img, per, condition }) {
  return (
    <div className="daClass">
      <span>{number}</span>
      <span className={condition ? "positive" : "negative"}>
        <Green />
        <p>{per}%</p>
      </span>
    </div>
  );
}

export default DA;
