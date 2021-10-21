import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOutUserStart } from "./../../redux/User/user.actions";
import { selectCartItemsCount } from "./../../redux/Cart/cart.selectors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.scss";

import logo from "./../../assets/logo.svg";

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalCartItemsNumber: selectCartItemsCount(state),
});

const Header = (props) => {
  const dispatch = useDispatch();
  const { currentUser, totalCartItemsNumber } = useSelector(mapState);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <header className="header">
      <nav>
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Candies shop logo" />
          </Link>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-links"
              activeclassName="active"
              onClick={handleClick}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/products"
              className="nav-links"
              activeclassName="active"
              onClick={handleClick}
            >
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className="nav-links"
              activeclassName="active"
              onClick={handleClick}
            >
              About us
            </Link>
          </li>
          {currentUser
            ? [
                <li key={1} className="nav-item">
                  <span className="nav-links" onClick={() => signOut()}>
                    Logout
                  </span>
                </li>,
              ]
            : [
                <li key={1} className="nav-item">
                  <Link
                    to="/registration"
                    className="nav-links"
                    activeclassName="active"
                    onClick={handleClick}
                  >
                    Register
                  </Link>
                </li>,
                <li key={2} className="nav-item">
                  <Link
                    to="/login"
                    className="nav-links"
                    activeclassName="active"
                    onClick={handleClick}
                  >
                    Login
                  </Link>
                </li>,
              ]}
        </ul>
        <ul className="nav-icon">
          {currentUser && [
            <li key={1}>
              <Link to="/account">
                <FontAwesomeIcon icon="user" />
              </Link>
            </li>,
          ]}
          <li className="cartBox">
            <Link to="/">
              <FontAwesomeIcon className="shopping-cart" icon="shopping-cart" />
              <p className="cartNumber"> {totalCartItemsNumber}</p>
            </Link>
          </li>
          <li className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? "times-circle" : "align-right"} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
