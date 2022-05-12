import React, { useState } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import logo from "./logo.png";
const About = () => {
  const [button, showButton] = useState(true);
  let scroll = () => {
    if (window.scrollY > 10) {
      showButton(false);
    } else {
      showButton(true);
    }
  };
  window.addEventListener("scroll", scroll);
  return (
    <>
      <Link to="/items" className={button ? "Link hidden" : "hidden "}>
        Go Home{" "}
      </Link>{" "}
      <div className="about">
        <div className="header">
          <h1>
            We enable you reach buyers within minutes and obtain maximum profit
            anytime{" "}
          </h1>{" "}
        </div>{" "}
        <div className="about-left">
          <h3> Empowering Comrades </h3>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Non optio
            voluptatibus iste officia doloremque quibusdam nisi quasi quae
            dolores illum.{" "}
          </p>{" "}
          <h3 className="rightson"> Developed By Tole Rightson Kirigha </h3>{" "}
          <a href=""> Read About Him </a>{" "}
        </div>{" "}
        <div className="about-right">
          <img src={logo} alt="" />
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default About;
