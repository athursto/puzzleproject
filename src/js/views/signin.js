import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const SignIn = () => {
	let history = useHistory();
	const { store, actions } = useContext(Context);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [warning, setWarning] = useState("");

	async function handleSubmit(e) {
		e.preventDefault();
		if (username !== "" && password !== "") {
			let resp = await actions.login(username, password);
			console.log(resp);
			if (resp) {
				history.push("/subscribe");
			} else {
				setWarning("Username or Password are not correct");
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
				<h3>Sign in to your account</h3>
				<br />
				<Form.Group controlId="formBasicUsername">
					<Form.Label>Username</Form.Label>
					<Form.Control
						type="text"
						placeholder="Username: sample"
						value={username}
						onChange={e => setUsername(e.target.value)}
					/>
				</Form.Group>
				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password: 1234"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<br />
				</Form.Group>
				<Button className="button-redesign" type="submit">
					Sign In
				</Button>
				&nbsp; &nbsp; or &nbsp;
				<Link to="/registerpage"> Register </Link>
				<br />
				<br />
			</Form>
		</div>
	);
};
