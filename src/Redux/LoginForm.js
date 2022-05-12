import React, { useState, useRef } from "react";
import "./LoginForm.css";
import { Link, Outlet } from "react-router-dom";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { mathActions } from "./Store/math";
import { useDispatch, useSelector } from "react-redux";
const LoginForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const users = useSelector((state) => state.carts.users);
  const user = users.find((item) => {
    return item.password == password;
  });
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleClick = () => {
    setTimeout(() => {
      setName("");
      setPassword("");
    }, 1000);
  };
  return (
    <section className="section">
      <div className="form-container">
        <div className="left">
          <h6>
            Don 't have Account? <a href="/sign">Sign in </a>{" "}
          </h6>{" "}
          <h3> Welcome to RU - bay </h3>{" "}
          <p className="explaination"> A trading platform for RU students </p>{" "}
          <form action="" className="form">
            <label htmlFor="email" className="label">
              User Name{" "}
            </label>{" "}
            <input type="text" id="email" onChange={handleName} value={name} />
            <label htmlFor="password" className="label password">
              Password{" "}
            </label>{" "}
            <input
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>{" "}
          <button className="login">
            <Link
              to={user ? "/items" : "/noUser"}
              className="Links"
              type="submit"
              onClick={handleClick}
            >
              {" "}
              Login{" "}
            </Link>{" "}
          </button>
          <Outlet />
        </div>{" "}
        <div className="right">
          <div className="icon-container">
            <FaQuoteLeft className="icon" />
          </div>{" "}
          <h1 className="dream"> Make Your Dream Come True. </h1>{" "}
          <div className="icon-container right-q">
            <FaQuoteRight className="icon" />
          </div>{" "}
          <p className="lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Eligendi,
            dolore!
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default LoginForm;
