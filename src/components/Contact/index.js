import React from "react";
import "./styles.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <div class="form">
          <h2>Contact Us</h2>
          <form action="">
            <div className="inputBx">
              <input type="text" placeholder="Full Name" />
            </div>
            <div className="inputBx">
              <input type="email" placeholder="Email" />
            </div>
            <div className="inputBx">
              <textarea
                name="message"
                id=""
                placeholder="Type Mesage Here..."
              ></textarea>
            </div>
            <div className="inputBx">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
