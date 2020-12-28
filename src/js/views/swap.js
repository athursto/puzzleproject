import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Col, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { CardRow } from "../component/cards";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { ModalBody } from "react-bootstrap/ModalBody";
import Container from "react-bootstrap/Container";

export const Swap = props => {
	let history = useHistory();
	const { store, actions } = useContext(Context);
	const [puzzleName, setPuzzleName] = useState("");
	const [puzzlePicture, setPuzzlePicture] = useState("");
	const [boxPicture, setBoxPicture] = useState("");
	const [number, setNumber] = useState("");
	const [age, setAge] = useState("");
	const [category, setCategory] = useState("Geography");
	const [warning, setWarning] = useState("");

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			let userid = store.user.info.id;
			let resp = await actions.swapPuzzle(puzzleName, puzzlePicture, boxPicture, number, age, category, userid);
			console.log(resp);
			if (resp) {
				actions.setAlert({
					message: "You have successfully uploaded your puzzle!",
					type: "success"
				});
				history.push("/puzzles");
			} else {
				console.error("failed to upload puzzle");
			}
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<>
			<Container>
				<h3>Upload Your Puzzle</h3>
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="formGroupPuzzle">
						<Form.Label>Name of Puzzle</Form.Label>
						<Form.Control
							type="Name Of Puzzle"
							placeholder="Name Of Puzzle"
							onChange={e => setPuzzleName(e.target.value)}
						/>
					</Form.Group>
					<Form.Group controlId="formGroupPicture">
						{/* <Form.Label>Picture of Puzzle</Form.Label> */}
						<Form.File
							id="pictureOfPuzzle"
							label="Picture of Puzzle"
							onChange={e => setPuzzlePicture(e.target.files[0])}
						/>
					</Form.Group>
					<Form.Group controlId="formGroupBox">
						{/* <Form.Label>Picture of Box</Form.Label> */}
						<Form.File
							id="pictureOfBox"
							label="Picture of Box"
							onChange={e => setBoxPicture(e.target.files[0])}
						/>
					</Form.Group>
					<Form.Group controlId="formGroupNumber">
						<Form.Label>Number of Pieces</Form.Label>
						<Form.Control
							type="Number of Pieces"
							placeholder="Number of Pieces"
							onChange={e => setNumber(e.target.value)}
						/>
					</Form.Group>
					<Form.Group controlId="formGroupAge">
						<Form.Label>Age Range</Form.Label>
						<Form.Control type="Age Range" placeholder="Age Range" onChange={e => setAge(e.target.value)} />
					</Form.Group>
					<Form.Group controlId="formGroupCategory">
						<Form.Label>Category</Form.Label>
						<Form.Control as="select" onChange={e => setCategory(e.target.value)}>
							<option>Geography</option>
							<option>Animals</option>
							<option>Nostalgia</option>
							<option>Americana</option>
							<option>Landscapes</option>
							<option>Other</option>
						</Form.Control>
					</Form.Group>
					<Button className="button-redesign" type="submit">
						Upload
					</Button>
				</Form>

				<br />
				{/* <p>Please subscribe in order to start SWAPING puzzles.</p> */}
				{/* <Button onClick={() => actions.createSubscription} variant="success" className="text-center">
                Subscribe
            </Button> */}
			</Container>
		</>
	);
};
