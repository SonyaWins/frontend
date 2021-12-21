
import React from "react";

// reactstrap components
import {
  Row,
  Col
} from "reactstrap";

import TablaDistancias from "../components/Tables/Distancias.js"
import TablaPuertos from "../components/Tables/Puertos.js"

function Puertos() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="6">
            <TablaDistancias />
          </Col>

          <Col md="6">
            <TablaPuertos />
          </Col>
        
        </Row>
      </div>
    </>
  );
}

export default Puertos;
