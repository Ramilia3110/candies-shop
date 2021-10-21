import React from "react";
import "./styles.scss";

import catCake from "./../../assets/images/cat-cake.png";
import macaroon from "./../../assets/images/pink-macaroon.png";
import candy from "./../../assets/images/candy.png";
import redlollipop from "./../../assets/images/red-lollipop.png";
import mintlollipop from "./../../assets/images/lollipopmint.png";
import donute from "./../../assets/images/donute.png";
import cupcake from "./../../assets/images/cupcake.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="candies-container">
        <div className="elements">
          <div>
            <img src={redlollipop} />
          </div>
          <div>
            <img src={donute} />
          </div>

          <div>
            <img src={macaroon} />
          </div>
        </div>
      </div>
      <div className="hero__container">
        <div className="hero__data">
          <p>I take you to the candies shop</p>
          <button>Check it out</button>
        </div>
        <div className="hero__img">
          <img src={catCake} alt="" className="cat-cake" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
