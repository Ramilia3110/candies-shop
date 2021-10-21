import React from "react";
import cupcake from "./../../assets/images/cupcake.png";
import "./styles.scss";

const Promotion2 = () => {
  return (
    <div className="promotion2">
      <div className="promotion2-container">
        <div className="promotion2-img">
          <img src={cupcake} />
        </div>
        <div className="promotion2-text">
          <h1>70% Off</h1>
          <p>on all</p>
          <h3>Cupcakes</h3>
        </div>
      </div>
    </div>
  );
};

export default Promotion2;
