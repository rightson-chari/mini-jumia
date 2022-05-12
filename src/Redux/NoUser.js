import React from "react";
import { Link } from "react-router-dom";

const NoUser = () => {
  return (
    <div className="noUser" style={{ paddingLeft: "1rem", color: "red" }}>
      <span>
        {" "}
        User Not Found{" "}
        <Link to="/" style={{ display: "block", paddingLeft: "1rem" }}>
          Try Again
        </Link>{" "}
      </span>{" "}
    </div>
  );
};

export default NoUser;
