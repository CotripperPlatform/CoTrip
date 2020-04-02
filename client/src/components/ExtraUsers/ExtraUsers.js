import React from "react";
import { Link } from "react-router-dom";
import "./ExtraUsers.css";

// Class Based React Component
function ExtraUsers(props) {
  let extraUsersValue = null;

  if (props.users.length > 2) {
    extraUsersValue = props.users.length - 2;
    return (
      <div className="ExtraUsers">
        <Link to={props.to} className="ExtraUsers__text">
          +{extraUsersValue}
        </Link>
      </div>
    );
  } else return null;
}

ExtraUsers.defaultProps = {
  to: "PATH",
  users: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
};

export default ExtraUsers;
