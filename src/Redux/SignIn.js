import React, { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { mathActions } from "./Store/math";
const SignIn = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [exist, setExist] = useState(false);
  const [blank, setBlank] = useState(false);
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();

  const users = useSelector((state) => state.carts.users);
  const user = users.find((item) => {
    return item.password == password;
  });

  const handleSign = () => {
    console.log(password.length == false);
    if (!password.length && !name.length) {
      setBlank(true);
      setDisplay(true);
      setTimeout(() => {
        setDisplay(false);
      }, 2000);
      console.log("nothing");
    } else {
      console.log("oya");
      dispatch(mathActions.sign({ name: name, password: password }));
    }
    setName("");
    setPassword("");
    console.log(users);
  };
  return (
    <section className="section">
      <div className="form-container">
        <div className="left">
          <h6>
            Already have an Account ? <a href="/"> Log In </a>{" "}
          </h6>{" "}
          <h3> Welcome to RU - bay </h3>{" "}
          <p className="explaination"> A trading platform for RU students </p>{" "}
          <form action="" className="form">
            <label htmlFor="email" className="label">
              User Name{" "}
            </label>{" "}
            <input
              type="text"
              id="email"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Password </label>{" "}
            <input
              type="text"
              id="password"
              htmlFor="password"
              className="label password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>{" "}
          <div className="signIn">
            <button
              className="submit"
              onClick={handleSign}
              style={{ cursor: "pointer" }}
            >
              Submit
            </button>
            <button className="second">
              <Link to="/" className="Links">
                {" "}
                Log In{" "}
              </Link>{" "}
            </button>
            <p className={display ? "view" : "none"}>
              {exist ? "User Exists" : { blank } ? "Enter Details" : ""}
            </p>
          </div>{" "}
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

export default SignIn;
