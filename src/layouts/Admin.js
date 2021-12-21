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
import React from "react";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, useLocation } from "react-router-dom";

import Header from "components/Header/Header.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routers/admin-routes.js";

var ps;

function Admin(props) {
  const mainPanel = React.useRef();
  const location = useLocation();
  
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    };
  });
  
  React.useEffect(() => {
    mainPanel.current.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location]);
  
  return (
    <div className="wrapper">
      <Sidebar
        {...props}
        routes={routes}
        bgColor={"black"}
        activeColor={"info"}
      />

      <div className="main-panel" ref={mainPanel}>
        <Header {...props} routes={routes}/>
        <Switch>
          {routes.map((prop, key) => {
            return (
              <Route
                path={prop.layout + prop.path}
                component={prop.component}
                key={key}
              />
            );
          })}
        </Switch>
      </div>
    </div>
  );
}

export default Admin;
