import UserPage from "views/Account.js";
import Ordenes from "views/Ordenes.js"

var userRouters = [
    {
      path: "/perfil",
      name: "Perfil",
      icon: "nc-icon nc-single-02",
      component: UserPage,
      layout: "/user",
    },
    {
        path: "/ordenes",
        name: "Ordenes",
        icon: "nc-icon nc-tile-56",
        component: Ordenes,
        layout: "/user",
    }
];

export default userRouters;