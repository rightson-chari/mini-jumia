import React from "react";
import LoginForm from "./LoginForm";
import Cart from "./Cart";
import About from "./About";
import Details from "./Details";
import SignIn from "./SignIn";
import NoUser from "./NoUser";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigation,
} from "react-router-dom";
import UserCart from "./UserCart";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LoginForm />} exact path="/">
          <Route path="noUser" element={<NoUser />}></Route>
        </Route>{" "}
        <Route exact path="/items" element={<Cart />}>
          {" "}
        </Route>{" "}
        <Route exact path="/About" element={<About />}>
          {" "}
        </Route>{" "}
        <Route exact path="/details/:id" element={<Details />}>
          {" "}
        </Route>{" "}
        <Route exact path="/cart" element={<UserCart />}>
          {" "}
        </Route>{" "}
        <Route exact path="/sign" element={<SignIn />}>
          {" "}
        </Route>{" "}
      </Routes>{" "}
    </Router>
  );
};

export default App;
