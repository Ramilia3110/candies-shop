import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { checkUserIsAdmin } from "./../../Utils";
import "./styles.scss";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const AdminNavbar = (props) => {
  const { currentUser } = useSelector(mapState);
  const isAdmin = checkUserIsAdmin(currentUser);

  if (!isAdmin) return null;

  return (
    <div className="adminNavbar">
      <ul>
        <li>
          <Link className="adminNav" to="/admin">
            Go to admin page
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminNavbar;
