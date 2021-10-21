import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductStart,
  setProduct,
} from "./../../redux/Products/product.actions";
import star from "./../../assets/icons/star.svg";
import "./styles.scss";

const mapState = ({ productsList }) => ({
  product: productsList.product,
});

const ProductCard = ({}) => {
  const dispatch = useDispatch();
  const { productID } = useParams();
  const { product } = useSelector(mapState);
  const { productThumbnail, productName, productPrice, productDescription } =
    product;

  useEffect(() => {
    dispatch(fetchProductStart(productID));
    return () => {
      dispatch(setProduct({}));
    };
  }, []);
  return (
    <div className="productCard">
      <div className="card-top">
        <div className="productThumbnail">
          <img src={productThumbnail} />
        </div>
        <div className="productInfo">
          <ul>
            <li>
              <h1> {productName}</h1>
            </li>
            <li>
              <span>${productPrice}</span>
            </li>
            <li>
              <ul>
                <li className="star">
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </li>
              </ul>
            </li>
            <li>
              <button className="addToCartBig">Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h1>Description</h1>
        <span
          className="desc"
          dangerouslySetInnerHTML={{ __html: productDescription }}
        />
      </div>
    </div>
  );
};

export default ProductCard;
