import React from "react";
import App from "./App";
// import "./Index.css";
import { store } from "./Store/index";
import { Provider } from "react-redux";
const Index = () => {
  return (
    <>
      <Provider store={store}>
        <App />
      </Provider>{" "}
    </>
  );
};

export default Index;
