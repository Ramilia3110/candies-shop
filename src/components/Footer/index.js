import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <ul className="social-links">
          <li>
            <FontAwesomeIcon className="icon" icon={["fab", "facebook"]} />
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={["fab", "instagram"]} />
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={["fab", "twitter"]} />
          </li>
        </ul>
        <div className="wrap"> Candies Shop 2021</div>
      </footer>
    </div>
  );
};

export default Footer;
