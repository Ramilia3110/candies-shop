import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsStart } from "./../../redux/Products/product.actions";

import Product from "./../../components/Product";

import LoadMore from "./../../components/LoadMore";
import "./styles.scss";
import { useHistory, useParams } from "react-router-dom";

const mapState = ({ productsList }) => ({
  products: productsList.products,
});

const Products = ({}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType } = useParams();
  const { products } = useSelector(mapState);
  const { data, queryDoc, isLastPage } = products;
  const [productCategory, setProductCategory] = useState(" ");

  useEffect(() => {
    dispatch(fetchProductsStart({ filterType }));
  }, [filterType]);

  const handleFilter = (e) => {
    const nextFilter = e.target.value;

    setProductCategory(nextFilter);

    history.push(`/products/${nextFilter}`);
  };

  const showAll = () => {
    setProductCategory(" ");
    history.push("./products");
  };

  if (!Array.isArray(data)) return null;
  if (data.length < 1) {
    return (
      <div className="products">
        <p>No search results</p>
      </div>
    );
  }

  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart({
        filterType,
        startAfterDoc: queryDoc,
        persistProducts: data,
      })
    );
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };

  return (
    <div className="products">
      <div className="productsList">
        <div className="select">
          <div className="container">
            <div className="categories-btn">
              <Link to="/products">
                <button className="category" onClick={showAll}>
                  All products
                </button>
              </Link>

              <button className="category" onClick={handleFilter} value="cakes">
                Cakes
              </button>

              <button
                className="category"
                onClick={handleFilter}
                value="icecream"
              >
                Ice creams
              </button>

              <button
                className="category"
                onClick={handleFilter}
                value="sweets"
              >
                Sweets
              </button>
              <button
                className="category"
                onClick={handleFilter}
                value="cookies"
              >
                Cookies
              </button>
              <button
                className="category"
                onClick={handleFilter}
                value="drinks"
              >
                Drinks
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="productsContent">
            {data.map((product, index) => {
              const productCon = { ...product };
              return <Product key={index} {...productCon} />;
            })}
          </div>
          <div className="loadMore">
            {" "}
            {!isLastPage && <LoadMore {...configLoadMore} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
