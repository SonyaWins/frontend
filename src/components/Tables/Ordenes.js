import { useState } from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";

import CrearOrden from "../Forms/CrearOrden.js"

export default function Ordenes(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => e.preventDefault();

  return (
    <>
    <Card className="h-100">
      <CardHeader>
        <CardTitle className="d-inline-block" tag="h4">Ordenes</CardTitle>
        <Form onSubmit={handleSubmit}>
            <Row>
              <Col md="4">
                <FormGroup>
                  <label>Origen</label>
                  <Input type="text" />
                </FormGroup>
              </Col>

              <Col md="4">
                <FormGroup>
                  <label>Destino</label>
                  <Input type="text" />
                </FormGroup>
              </Col>

              <Col md="4">
                <FormGroup>
                  <label>Estado</label>
                  <Input type="text" />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="12">
                <Button type="submit" >Buscar</Button>
                <Button onClick={handleShow}>Crear</Button>
              </Col>
            </Row>
            
          </Form>
      </CardHeader>

      <CardBody>
        <Table responsive>
          <thead className="text-primary">
            <tr>
              <th>Origen</th>
              <th>Destino</th>
              <th>Dimensiones</th>
              <th>Precio</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </Table>
      </CardBody>
    </Card>

    <Modal centered={true} isOpen={show} toggle={handleClose}>

      <ModalHeader toggle={handleClose}>
        Crear Orden
      </ModalHeader>

      <ModalBody>
        <CrearOrden />
      </ModalBody>
    </Modal>
    </>
  )
}