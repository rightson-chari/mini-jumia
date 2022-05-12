import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Item from "./Item";
import "./Index.css";
import { Link } from "react-router-dom";
import { mathActions } from "./Store/math";
import { useDispatch, useSelector } from "react-redux";
const UserCart = () => {
  const data = useSelector((state) => state.carts.itemList);
  const totalQuantity = useSelector((state) => state.carts.totalQuantity);
  const totalPrice = useSelector((state) => state.carts.totalPrice);
  const { single, total } = data.reduce(
    (totals, item) => {
      let t = (totals.single += item.price * item.quantity);
      totals.total += t;
      return totals;
    },
    {
      single: 0,
      total: 0,
    }
  );
  useEffect(() => {
    dispatch(mathActions.summary(total));
  }, [totalQuantity]);

  console.log(totalPrice);
  const dispatch = useDispatch();

  const reduceAmount = (id) => {
    dispatch(mathActions.reduceAmount(id));
  };

  if (data.length !== 0) {
    return (
      <div>
        <Nav> </Nav>{" "}
        <div className="section">
          <div className="contain">
            {data.map((item) => {
              const { title, price, image, id, quantity } = item;

              return (
                <article className="cardUser card">
                  {" "}
                  <Link to={`/details/${id}`}>
                    {" "}
                    <img src={image} alt="" />
                  </Link>{" "}
                  <div className="details">
                    <div>
                      <p>
                        {" "}
                        <span className="price"> Name :</span>{" "}
                        {title.slice(0, 10)}
                        ...{" "}
                      </p>
                      <p>
                        <span className="price"> Number of Items is:</span>
                        {quantity}
                      </p>
                      <p>
                        <span className="price"> KSH </span> {price}{" "}
                      </p>
                    </div>{" "}
                    <div className="addToCartContainer">
                      <button
                        className="addToCart"
                        onClick={() => dispatch(mathActions.removeItem(id))}
                      >
                        <div className="id" to={`/details/${id}`}>
                          Remove Item
                        </div>{" "}
                      </button>
                      <button
                        className="addToCart"
                        onClick={() => reduceAmount(id)}
                      >
                        Reduce{" "}
                      </button>
                    </div>{" "}
                  </div>{" "}
                </article>
              );
            })}
            <div className="TotalPrice">
              <p>
                <span className="price"> Total Price : </span> {totalPrice}
              </p>
              <button className="placeOrder">Place Order</button>
            </div>
          </div>
        </div>{" "}
      </div>
    );
  } else {
    return (
      <div>
        <Nav> </Nav>{" "}
        <div className="section">
          <div className="disclaimer">
            <h1>Sorry!!! No Items in you cart </h1>
          </div>
        </div>{" "}
      </div>
    );
  }
};

export default UserCart;
