import React from "react";
import lollipopMint from "./../../assets/images/lollipopmint.png";
import "./styles.scss";

const Promotion = () => {
  return (
    <div className="promotion">
      <div className="promotion-container">
        <div className="promotion-text">
          <h3>Lollipop Day</h3>
          <p>October 19-23</p>
          <h1>
            Buy 1 get <span>3</span>
          </h1>
        </div>
        <div className="promotion-img">
          <img src={lollipopMint} />
        </div>
      </div>
    </div>
  );
};

export default Promotion;
