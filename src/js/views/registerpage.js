import React, { useState, useContext, useFormFields } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

export const RegisterPage = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	const [full_name, setFull_name] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [zip, setZip] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [warning, setWarning] = useState("");

	async function handleSubmit(e) {
		e.preventDefault();
		if (
			full_name !== "" &&
			email !== "" &&
			address !== "" &&
			city !== "" &&
			state !== "" &&
			zip !== "" &&
			username !== "" &&
			password !== ""
		) {
			let resp = await actions.registerPage(full_name, email, address, city, state, zip, username, password);
			console.log(resp);
			if (resp) {
				history.push("/signin");
			} else {
				setWarning("Failed to register");
			}
		}
	}

	return (
		<div className="container">
			{warning !== "" && (
				<Alert className="text-center" variant="success">
					{warning}
				</Alert>
			)}
			<Form className="login-form" onSubmit={handleSubmit}>
				<h3>Register</h3>
				<Form.Group controlId="fullName">
					<Form.Label>Full Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Full Name"
						value={full_name}
						onChange={e => setFull_name(e.target.value)}
					/>
				</Form.Group>
				<Form.Group controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						placeholder="Email"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</Form.Group>
				<Form.Group controlId="address">
					<Form.Label>Address</Form.Label>
					<Form.Control
						type="text"
						placeholder="Address"
						value={address}
						onChange={e => setAddress(e.target.value)}
					/>
				</Form.Group>
				<Form.Group controlId="city">
					<Form.Label>City</Form.Label>
					<Form.Control type="text" placeholder="City" value={city} onChange={e => setCity(e.target.value)} />
				</Form.Group>
				<Form.Group controlId="state">
					<Form.Label>State</Form.Label>
					<Form.Control
						type="text"
						placeholder="State"
						value={state}
						onChange={e => setState(e.target.value)}
					/>
				</Form.Group>
				<Form.Group controlId="zip">
					<Form.Label>Zip</Form.Label>
					<Form.Control type="text" placeholder="Zip" value={zip} onChange={e => setZip(e.target.value)} />
				</Form.Group>
				<Form.Group controlId="userName">
					<Form.Label>Username</Form.Label>
					<Form.Control
						type="text"
						placeholder="Username"
						value={username}
						onChange={e => setUsername(e.target.value)}
					/>
				</Form.Group>
				<Form.Group controlId="password">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="text"
						placeholder="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</Form.Group>
				<Button className="button-redesign" type="submit">
					Register
				</Button>
				&nbsp; &nbsp; or &nbsp;
				<Link to="/signin"> Cancel </Link>
			</Form>
		</div>
	);
};
