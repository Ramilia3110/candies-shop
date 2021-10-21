import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "./../../redux/Cart/cart.actions";

import "./styles.scss";

const Product = (product) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { productName, productThumbnail, productPrice, documentID } = product;
  if (
    !documentID ||
    !productThumbnail ||
    !productName ||
    typeof productPrice == "undefined"
  )
    return null;

  const handleAddToCart = (product) => {
    if (!product) return;

    dispatch(addProduct(product));
    history.push("/cart");
  };

  return (
    <div className="card">
      <div className="boxImg">
        <Link to={`/product/${documentID}`}>
          <img className="img" src={productThumbnail} alt={productName} />
        </Link>
      </div>
      <div className="boxContent">
        <Link to={`/product/${documentID}`}>
          <h3> {productName} </h3>
        </Link>

        <h2 className="price">${productPrice}</h2>
        <button className="addToCart" onClick={() => handleAddToCart(product)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
