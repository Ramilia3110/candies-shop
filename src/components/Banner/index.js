import React from "react";
import melting from "./../../assets/images/melting.png";
import candyhouse from "./../../assets/images/candyhouse.png";
import "./styles.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="choco">
        <img className="melting" src={melting} />
      </div>
      <div className="bannerContent">
        <div className="bannerText">
          <h1>Welcome to the world of sweets.</h1>
        </div>
        <div className="candyHouse">
          <img src={candyhouse} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
