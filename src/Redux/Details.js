import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Loading from "./Loading";
import { FaCannabis } from "react-icons/fa";
import "./Details.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
const Details = () => {
  const param = useParams();
  const { id } = param;
  const [min, setMin] = useState(60);
  const [sec, setSec] = useState(60);
  const [item, setItem] = useState(null);
  const link = "https://fakestoreapi.com/products/";
  const [button, showButton] = useState(true);
  let scroll = () => {
    if (window.scrollY > 10) {
      showButton(false);
    } else {
      showButton(true);
    }
  };
  window.addEventListener("scroll", scroll);
  const fetchItems = async () => {
    try {
      const response = await fetch(`${link}${id}`);
      const data = await response.json();
      if (data !== null) {
        setItem(data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchItems();
  }, [id]);
  console.log(item);
  if (item) {
    const { category, description, image, price, rating, title } = item;

    const { rate, count } = rating;

    return (
      <>
        <Nav />
        <Link to="/items" className={button ? "button open" : "button"}>
          Go Home{" "}
        </Link>{" "}
        <section className="itemDetails">
          <div className="product">
            <div className="image">
              <img src={image} alt="" />
            </div>

            <div className="itemDetails">
              <h4 className="title">{title}</h4>
              <p className="category">
                <span className="span">CATEGORY</span>
                {category}
              </p>
              <div className="priceCard">
                <div className="priceHeader">
                  <div className="can">
                    {" "}
                    <FaCannabis className="cannabis" /> <span>Flash Sales</span>
                  </div>
                  <div className="time">{`Time Left 13h is ${min} :${sec}`}</div>
                </div>
                <div className="inner">
                  {" "}
                  <p className="ksh"> {`KSh ${price * 100}`}</p>
                  <p className="count"> {`${count} items left`}</p>
                </div>
              </div>

              {/* <p>{}</p> */}
            </div>
            <div className="bottom">
              <p>{description}</p>
              <p className="ratings">{`RATINGS ${rate}`}</p>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <Nav></Nav>
        <Loading />
      </>
    );
  }
};

export default Details;
