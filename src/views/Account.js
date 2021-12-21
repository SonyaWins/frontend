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

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle
} from "reactstrap";

import EditAccount from "../components/Forms/EditAccount.js"

function User() {
  return (
    <>
      <div className="content d-flex">
        <Card className="ml-auto mr-auto my-auto card-user w-75">
          
          <CardHeader>
            <CardTitle tag="h5">Editar Perfil de Usuario</CardTitle>
          </CardHeader>

          <CardBody>
            <EditAccount />
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default User;
