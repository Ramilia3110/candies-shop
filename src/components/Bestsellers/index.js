import React from "react";
import Product from "./../Product";

import "./styles.scss";
import blueflower from "./../../assets/blueflower.png";
import redLollipop from "./../../assets/images/red-lollipop.png";

const topProducts = [
  {
    documentID: "001",
    productName: "Ice CEE",
    productThumbnail:
      "https://firebasestorage.googleapis.com/v0/b/candies-shop-8b353.appspot.com/o/images%2Fsweet-combo-2.png?alt=media&token=fba71253-8549-4801-87ed-9e3e6cfbd14b",
    productPrice: "45",
  },
  {
    documentID: "002",
    productName: "Macaron",
    productThumbnail:
      "https://firebasestorage.googleapis.com/v0/b/candies-shop-8b353.appspot.com/o/images%2Fsweet-combo-2.png?alt=media&token=fba71253-8549-4801-87ed-9e3e6cfbd14b",
    productPrice: "25",
  },
  {
    documentID: "002",
    productName: "Macaron",
    productThumbnail:
      "https://firebasestorage.googleapis.com/v0/b/candies-shop-8b353.appspot.com/o/images%2Fsweet-combo-2.png?alt=media&token=fba71253-8549-4801-87ed-9e3e6cfbd14b",
    productPrice: "25",
  },
];

const Bestsellers = () => {
  return (
    <div className="bestsellers">
      <h1>Top sellers</h1>
      <div className="flowers">
        <div>
          <img src={blueflower} />
        </div>
        <div>
          <img src={blueflower} />
        </div>
        <div>
          <img src={blueflower} />
        </div>
      </div>

      <div className="boxes">
        {topProducts.map((product, index) => {
          const productCon = { ...product };
          return (
            <div class="box">
              <Product key={index} {...productCon} />{" "}
            </div>
          );
        })}
        <div className="bestseller-lollipop">
          <img src={redLollipop} />
        </div>
      </div>
    </div>
  );
};

export default Bestsellers;
