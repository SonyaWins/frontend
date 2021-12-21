import {
    Button,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
} from "reactstrap";

export default function EditAccount(props) {
    return (
        <Form>
              
            <Row>   
            <Col md="6">
                <FormGroup>
                <label>Nombre de usuario</label>
                <Input
                    placeholder="Nombre de usuario"
                    type="text"
                />
                </FormGroup>
            </Col>

            <Col md="6">
                <FormGroup>
                <label htmlFor="exampleInputEmail1">
                    Correo
                </label>
                <Input placeholder="Email" type="email" />
                </FormGroup>
            </Col>
            </Row>
            
            <Row>
            <Col md="6">
                <FormGroup>
                <label>Nombre(s)</label>
                <Input
                    placeholder="Nombre"
                    type="text"
                />
                </FormGroup>
            </Col>

            <Col md="6">
                <FormGroup>
                <label>Apellido(s)</label>
                <Input
                    placeholder="Apellido"
                    type="text"
                />
                </FormGroup>
            </Col>
            </Row>
            
            <Row>
            <Col>
                <hr />
                <h6>Cambiar contraseña</h6>
            </Col>
            </Row>
            
            <Row>
            <Col md="6">
                <FormGroup>
                <label>Contraseña actual</label>
                <Input
                    type="password"
                />
                </FormGroup>
            </Col>

            <Col md="6">
                <FormGroup>
                <label>Nueva Contraseña</label>
                <Input
                    type="password"
                />
                </FormGroup>
            </Col>
            </Row>

            <Row>
            <div className="update ml-auto mr-auto">
                <Button
                color="primary"
                type="submit"
                >
                Guardar cambios
                </Button>
            </div>
            </Row>

        </Form>
    )
}