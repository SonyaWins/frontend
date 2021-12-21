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

import CrearPuerto from "../Forms/CrearPuerto.js"

export default function Puertos(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => e.preventDefault();

  return (
    <>
      <Card className="">
        <CardHeader>
          <CardTitle className="d-inline-block" tag="h4">Puertos</CardTitle>
        
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md="6">
                <FormGroup>
                  <label>Nombre</label>
                  <Input type="text" />
                </FormGroup>
              </Col>

              <Col md="6">
                <FormGroup>
                  <label>Locaciòn</label>
                  <Input type="text" />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="12">
                <Button type="submit">Buscar</Button>
                <Button onClick={handleShow}>Crear</Button>
              </Col>
            </Row>
            
          </Form>
        </CardHeader>

        <CardBody>
          <Table responsive>
            <thead className="text-primary">
            <tr>
                <th>Nombre</th>
                <th>Paìs</th>
                <th>Ciudad</th>
            </tr>
            </thead>
            <tbody>
            </tbody>
          </Table>
        </CardBody>
      </Card>

      <Modal centered={true} isOpen={show} toggle={handleClose}>
        <ModalHeader toggle={handleClose}>
          Crear Puerto
        </ModalHeader>

        <ModalBody>
          <CrearPuerto />
        </ModalBody>
      </Modal>
    </>
  )
}