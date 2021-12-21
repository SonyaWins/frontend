import {
    Button,
    Row,
    Col,
    Form,
    FormGroup,
    Input
} from "reactstrap";

import User from "../../models/user.js"
//import Axios from "axios";

export default function login(props) {
	
	const onLogin = (e) => {
		e.preventDefault();

		props.setAuth(new User("user", "user", "user", "user", "user", "user"));
	}

	return (
		<Form onSubmit={onLogin}>
			<Row>   
				<Col md="12">
					<FormGroup>
						<label>Nombre de usuario</label>
						<Input required name="username"type="text" />
					</FormGroup>
				</Col>
			</Row>
				
			<Row>
				<Col md="12">
					<FormGroup>
						<label>Contraseña</label>
						<Input required name="password" type="password" />
					</FormGroup>
				</Col>
			</Row>

			<Row>
				<div className="ml-auto mr-auto">
					<Button color="primary" type="submit"> Ingresar </Button>
				</div>
			</Row>
		</Form>
	)
}