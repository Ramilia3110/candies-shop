import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { signUpUserStart } from "./../../redux/User/user.actions";

import "./styles.scss";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userErr: user.userErr,
});

const Signup = () => {
  const dispatch = useDispatch();
  const { currentUser, userErr } = useSelector(mapState);
  const history = useHistory();
  const [accountName, setAccountName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (currentUser) {
      reset();
      history.push("/");
    }
  }, [currentUser]);

  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr);
    }
  }, [userErr]);

  const reset = () => {
    setAccountName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors([]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(
      signUpUserStart({ accountName, email, password, confirmPassword })
    );
  };

  return (
    <div className="signUp">
      <div className="form-wrap">
        <div className="signup-header">
          <h1>Create an account</h1>
        </div>

        {errors.length > 0 && (
          <ul>
            {errors.map((err, index) => {
              return <li key={index}>{err}</li>;
            })}
          </ul>
        )}

        <form className="signup-form" onSubmit={handleFormSubmit}>
          <span>
            <input
              type="text"
              name="accountName"
              placeholder="Full name"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              required
            />
          </span>
          <span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </span>
          <span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </span>
          <span>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </span>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
