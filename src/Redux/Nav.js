import React, { useState } from "react";
import "./Nav.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import { useSelector } from "react-redux";
const Nav = () => {
  const [open, setOpen] = useState(false);
  const amout = useSelector((state) => state.carts.totalQuantity);
  console.log(amout);
  return (
    <>
      <nav>
        <div>
          {" "}
          <img src={logo} alt="" />
        </div>{" "}
        <div className="div-container">
          <Link className="link" to="/about">
            About{" "}
          </Link>{" "}
          <Link className="link" to="/cart">
            Cart Items: {amout}{" "}
          </Link>{" "}
          <Link className="link" to="/">
            Logout{" "}
          </Link>{" "}
        </div>{" "}
        <div className="divs">
          <FaBars className="bars" onClick={() => setOpen(!open)} />{" "}
        </div>{" "}
      </nav>{" "}
      <div className={open ? "warena open" : "warena"}>
        <div className={open ? "bush mose" : "bush"}>
          <Link className="nki" to="/">
            Logout{" "}
          </Link>{" "}
          <Link className="nki" to="/items">
            Home{" "}
          </Link>{" "}
          <Link className="nki" to="/about">
            About{" "}
          </Link>{" "}
          <Link className="nki" to="/cart">
            Your Cart: {amout}{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Nav;
