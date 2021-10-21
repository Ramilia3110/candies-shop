import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addProductStart,
  fetchProductsStart,
  deleteProductStart,
} from "./../../redux/Products/product.actions";
import Modal from "./../../components/Modal";
import LoadMore from "./../../components/LoadMore";
import { storage } from "./../../firebase/utilities";
import { CKEditor } from "ckeditor4-react";
import trash from "./../../assets/icons/trash.svg";
import "./styles.scss";

const mapState = ({ productsList }) => ({
  products: productsList.products,
});

const Admin = (props) => {
  const { products } = useSelector(mapState);
  const dispatch = useDispatch();

  const [hideModal, setHideModal] = useState(true);
  const [productCategory, setProductCategory] = useState("cakes");
  const [productName, setProductName] = useState("");
  const [image, setImage] = useState(null);
  const [productThumbnail, setProductThumbnail] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState("");
  const { data, queryDoc, isLastPage } = products;

  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, []);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setProductThumbnail(url);
          });
      }
    );
  };

  const toggleModal = () => setHideModal(!hideModal);

  const configModal = {
    hideModal,
    toggleModal,
  };

  const resetForm = () => {
    setHideModal(true);
    setProductCategory("cakes");
    setProductName("");
    setProductThumbnail(null);
    setProductPrice(0);
    setProductDescription("");
    setProgress(0);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addProductStart({
        productCategory,
        productName,
        productThumbnail,
        productPrice,
        productDescription,
      })
    );
    resetForm();
  };
  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart({
        startAfterDoc: queryDoc,
        persistProducts: data,
      })
    );
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };

  return (
    <div className="admin">
      <div className="callToActions">
        <ul>
          <li>
            <button className="addBtn" onClick={() => toggleModal()}>
              Add new product
            </button>
          </li>
        </ul>
      </div>

      <Modal {...configModal}>
        <div className="addNewProductForm">
          <h2>Add new product</h2>
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleChange}
              required
            />
            <button onClick={handleUpload}>Upload</button>
            <progress value={progress} max="100" />
          </div>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="productName"
              placeholder="Name of the product"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
            <select
              onChange={(e) => {
                setProductCategory(e.target.value);
              }}
            >
              <option value="cakes">Cakes</option>
              <option value="icecream"> Ice creams</option>
              <option value="sweets">Sweets</option>
              <option value="cookies"> Cookies </option>
              <option value="drinks">Drinks</option>
            </select>

            <input
              type="number"
              name="number"
              min="0.00"
              max="1000.00"
              step="0.01"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              required
            />

            <CKEditor
              onChange={(e) => setProductDescription(e.editor.getData())}
            />

            <button type="submit">Submit</button>
          </form>
          <div> {productThumbnail}</div>
        </div>
      </Modal>

      <div className="manageProducts">
        <table border="0" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <th>
                <h1>Manage Products</h1>
              </th>
            </tr>
            <tr>
              <td>
                <table
                  className="results"
                  border="0"
                  cellPadding="10"
                  cellSpacing="0"
                >
                  <tbody>
                    {Array.isArray(data) &&
                      data.length > 0 &&
                      data.map((product, index) => {
                        const {
                          productName,
                          productThumbnail,
                          productPrice,
                          documentID,
                        } = product;

                        return (
                          <tr key={index}>
                            <td>
                              <Link to={`/product/${documentID}`}>
                                <img className="thumb" src={productThumbnail} />
                              </Link>
                            </td>
                            <td>
                              <Link
                                className="black"
                                to={`/product/${documentID}`}
                              >
                                {productName}
                              </Link>
                            </td>
                            <td>
                              <Link
                                className="black"
                                to={`/product/${documentID}`}
                              >
                                ${productPrice}{" "}
                              </Link>
                            </td>
                            <td>
                              <button
                                onClick={() =>
                                  dispatch(deleteProductStart(documentID))
                                }
                                className="deleteIcon"
                              >
                                <img src={trash} />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td>
                <table border="0" cellPadding="10" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td className="loadMore">
                        {!isLastPage && <LoadMore {...configLoadMore} />}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
