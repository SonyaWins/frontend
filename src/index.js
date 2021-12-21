/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import Admin from "layouts/Admin.js";
import User from "layouts/User.js";
import Auth from "layouts/Auth.js"

import UserModel from "models/user.js"

const App = () => {
  const [auth, setAuth] = useState();
  let userType = auth instanceof UserModel ? auth.type : "";
  let layout, url;

  switch(userType) {
    case "user":
      layout = <Route path="/user" render={(props) => <User {...props} />} />
      url = "/user"
      break;
    case "admin":
      layout = <Route path="/admin" render={(props) => <Admin {...props} />} />
      url = "/admin"
      break;
    default: 
      layout = <Route path="/auth" render={(props) => <Auth {...props} setAuth={setAuth} />} />
      url = "/auth"
  }

  return (
    <BrowserRouter>
      <Switch>
        {layout}
        <Redirect to={url} />
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />,document.getElementById("root"));
