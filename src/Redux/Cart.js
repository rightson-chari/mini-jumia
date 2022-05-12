import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Item from "./Item";
import "./Index.css";
import Loading from "./Loading";
import { loadingActions } from "./Store/loading";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
  const loading = useSelector((state) => state.loading.loading);
  const datum = useSelector((state) => state.carts.itemList);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const fetchItems = async () => {
    dispatch(loadingActions.openLoading());
    try {
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = await response.json();
      if (data) {
        const items = data.map((item) => {
          const { id, price, title, category, image } = item;
          dispatch(loadingActions.closeLoading());
          return {
            id: id,
            price: price * 100,
            category: category,
            title: title,
            image: image,
            quantity: 0,
          };
        });
        setData(items);
      }
    } catch (e) {
      dispatch(loadingActions.closeLoading());
      console.log(e);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <Nav> </Nav>{" "}
      <div className="section">
        {" "}
        {loading ? (
          <Loading />
        ) : (
          <div className="contain">
            {" "}
            {data.map((item) => {
              const { id } = item;
              return <Item key={id} {...item} />;
            })}{" "}
          </div>
        )}{" "}
      </div>{" "}
    </div>
  );
};

export default Cart;
