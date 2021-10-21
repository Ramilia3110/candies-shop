import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  userSignInStart,
  googleSignInStart,
} from "./../../redux/User/user.actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.scss";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userErr: user.userErr,
});

const SignIn = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser, userErr } = useSelector(mapState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (currentUser) {
      resetForm();
      history.push("/");
    }
  }, [currentUser]);

  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr);
    }
  }, [userErr]);

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setErrors([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userSignInStart({ email, password }));
  };

  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  };

  return (
    <div className="signin">
      <div className="formWrap">
        <div className="login-header">
          <h1>Login</h1>
        </div>
        {errors.length > 0 && (
          <ul>
            {errors.map((err, index) => {
              return (
                <li className="error" key={index}>
                  {err}
                </li>
              );
            })}
          </ul>
        )}
        <form className="login-form" onSubmit={handleSubmit}>
          <span>
            <FontAwesomeIcon className="icon" icon="envelope" />
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </span>

          <span>
            <FontAwesomeIcon className="icon" icon="lock" />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </span>

          <button type="submit">Login</button>
          <button onClick={handleGoogleSignIn}> Sign in with Google</button>

          <div className="links-box">
            <Link className="links" to="/registration">
              Register
            </Link>

            <Link className="links" to="/recovery">
              Reset Password
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
