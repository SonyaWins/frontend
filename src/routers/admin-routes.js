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
import Dashboard from "views/Dashboard.js";
import UserPage from "views/Account.js";
import Ordenes from "views/Ordenes.js"
import Puertos from "views/Puertos.js"

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/perfil",
    name: "Perfil",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/ordenes",
    name: "Ordenes",
    icon: "nc-icon nc-tile-56",
    component: Ordenes,
    layout: "/admin",
  },
  {
    path: "/puertos",
    name: "Puertos",
    icon: "nc-icon nc-tile-56",
    component: Puertos,
    layout: "/admin",
  }
];

export default routes;