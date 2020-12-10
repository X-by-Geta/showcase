import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-svg.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-design-system.scss?v1.0.0";

import CheckoutPage from "views/examples/CheckoutPage.js";
import Ecommerce from "views/examples/Ecommerce.js";
import ProductPage from "views/examples/ProductPage.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <Ecommerce {...props} />} />
      <Route
        path="/checkout-page"
        exact
        render={(props) => <CheckoutPage {...props} />}
      />
      <Route
        path="/product-page"
        exact
        render={(props) => <ProductPage {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
