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

import CrearDistancia from "../Forms/CrearDistancia.js"

export default function Distancias(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (e) => e.preventDefault();
    
    return (
      <>
        <Card className="">
            <CardHeader>
            <CardTitle tag="h4">Distancia</CardTitle>
            <Form onSubmit={handleSubmit}>
                <Row>
                <Col md="6">
                    <FormGroup>
                    <label>Puerto A</label>
                    <Input
                        type="text"
                    />
                    </FormGroup>
                </Col>

                <Col md="6">
                    <FormGroup>
                    <label>Puerto B</label>
                    <Input
                        type="text"
                    />
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
                    <th>Origen</th>
                    <th>Destino</th>
                    <th>Distancia</th>
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
          <CrearDistancia />
        </ModalBody>
      </Modal>
      </>
    )
}