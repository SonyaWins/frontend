import {
    Button,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
} from "reactstrap";

export default function CrearOrden(props) {
    return (
      <Form>
        <Row>   
          <Col md="12">
            <FormGroup>
              <label>Puerto Origen</label>
              <Input required name="name"type="text" />
            </FormGroup>
          </Col>
        </Row>
            
        <Row>
          <Col md="12">
            <FormGroup>
              <label>Puerto destino</label>
              <Input required name="location" type="text" />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md="12">
            <FormGroup>
              <label>Dimensiones</label>
              <Input required name="dimensions" type="text" />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <div className="ml-auto mr-auto">
              <Button color="primary" type="submit"> Crear </Button>
          </div>
        </Row>
      </Form>
    )
}