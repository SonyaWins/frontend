import React, { useState } from "react";

import {
    Card,
    CardBody,
    CardHeader,
    NavItem,
    NavLink,
    Nav
} from "reactstrap";

import Login from "../components/Forms/Login.js"
import SignUp from "../components/Forms/SignUp.js"

function Auth(props) {
  const [tab, setTab] = useState(0);

  const changeTab = (e) => {
    e.preventDefault();
    if (tab === 1) {
      setTab(0);
    } else {
      setTab(1);
    }
  }

  return (
    <div Style="background-color: #f4f3ef;" className="wrapper">
    	<div className="container h-100 d-flex">

        <Card className="ml-auto mr-auto my-auto">
          <CardHeader>
            <Nav className="nav-tabs" variant="tabs" defaultActiveKey="#first">
              <NavItem>
                <NavLink 
                  className={tab === 0? "active" : ""}
                  onClick={(e) => changeTab(e)} href="#first">
                    Ingresar
                  </NavLink>
              </NavItem>

              <NavItem>
                <NavLink 
                  className={tab === 1? "active" : ""}
                  onClick={(e) => changeTab(e)} href="#link">
                    Crear Cuenta
                  </NavLink>
              </NavItem>
            </Nav>
          </CardHeader>

          <CardBody>
            {tab === 0? <Login setAuth={props.setAuth} /> : <SignUp setAuth={props.setAuth} />}
          </CardBody>
        </Card> 
      </div>
    </div>
  );
}

export default Auth;
