import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from "./Components/Error/Error";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login/Login";
import React, { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Header from "./Components/Header/Header";
import Checkout from "./Components/Checkout/Checkout";
import Admin from "./Components/Admin/Admin";
import ManageProduct from "./Components/ManageProduct/ManageProduct";
import OrderInfo from "./Components/OrderInfo/OrderInfo";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          
          <PrivateRoute path="/checkout/:id">
            <Checkout></Checkout>
          </PrivateRoute>

          <PrivateRoute path="/admin/addProduct">
            <Admin></Admin>
          </PrivateRoute>

          <PrivateRoute path="/admin/manageProduct">
            <ManageProduct></ManageProduct>
          </PrivateRoute>

          <PrivateRoute path="/orderInfo">
            <OrderInfo></OrderInfo>
          </PrivateRoute>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
