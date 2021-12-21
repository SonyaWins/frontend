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
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// core components
import {
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";

function Dashboard() {
  return (
    <>
      <div className="content d-flex">
        <Row className="ml-auto mr-auto my-auto row-eq-height"> 
          <Col md="4">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Ordenes</CardTitle>
              </CardHeader>

              <CardBody style={{ height: "266px" }}>
                <Pie
                  data={dashboardEmailStatisticsChart.data}
                  options={dashboardEmailStatisticsChart.options}
                />
              </CardBody>
              
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-primary" /> Opened{" "}
                  <i className="fa fa-circle text-warning" /> Read{" "}
                  <i className="fa fa-circle text-danger" /> Deleted{" "}
                  <i className="fa fa-circle text-gray" /> Unopened
                </div>
              </CardFooter>
            </Card>
          </Col>

          <Col md="8">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h5">Historico</CardTitle>
              </CardHeader>

              <CardBody className="d-flex" style={{ height: "266px" }}>
                <Line
                  className="my-auto"
                  data={dashboardNASDAQChart.data}
                  options={dashboardNASDAQChart.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              
              <CardFooter>
                <div className="chart-legend">
                  <i className="fa fa-circle text-info" /> Tesla Model S{" "}
                  <i className="fa fa-circle text-warning" /> BMW 5 Series
                </div>
              </CardFooter>
            
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
