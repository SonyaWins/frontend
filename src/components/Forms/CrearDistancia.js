import {
    Button,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
} from "reactstrap";

export default function CrearPuerto(props) {
    return (
      <Form>
        <Row>   
          <Col md="12">
            <FormGroup>
              <label>Puerto A</label>
              <Input required name="portA"type="text" />
            </FormGroup>
          </Col>
        </Row>
            
        <Row>
          <Col md="12">
            <FormGroup>
              <label>Puerto B</label>
              <Input required name="portB" type="text" />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md="12">
            <FormGroup>
              <label>Distancia</label>
              <Input required name="distance" type="number" />
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