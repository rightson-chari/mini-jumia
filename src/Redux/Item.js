import React from "react";
import { Link } from "react-router-dom";
import { mathActions } from "./Store/math";
import { useDispatch } from "react-redux";
const Item = ({ id, price, category, image, quantity, title }) => {
  const dispatch = useDispatch();
  let splice = (title) => {
    title.slice(0, 10);
  };
  const actions = () => {
    dispatch(mathActions.addItem({ id, price, image, title, quantity }));
  };

  return (
    <article className="card">
      {" "}
      <Link to={`/details/${id}`}>
        {" "}
        <img src={image} alt="" />
      </Link>{" "}
      <div className="details">
        <div>
          <p> {title.slice(0, 20)}... </p>{" "}
          <p className="number">
            <span className="price"> KSH </span> {price}
          </p>{" "}
        </div>{" "}
        <div className="addToCartContainer">
          <button className="addToCart" onClick={actions}>
            <div className="id" to={`/details/${id}`}>
              ADD TO CART{" "}
            </div>{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </article>
  );
};

export default Item;
