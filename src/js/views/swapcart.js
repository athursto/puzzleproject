import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Pagination from "react-bootstrap/Pagination";
import Form from "react-bootstrap/Form";

export const Swapcart = props => {
	const { store, actions } = useContext(Context);
	const [cart, setCart] = useState([]);
	const [puzzleFetch, setPuzzleFetch] = useState({});
	let history = useHistory();

	return (
		<Container>
			{store.swapCart != undefined && store.swapCart.length > 0 ? (
				<div className="cart">
					<h3 className="text-center"> Your Cart</h3>
					<br />

					<Container className="float-left cart-container">
						<Card>
							<Card.Body>
								{/* all of these need to check PuzzleFetch now */}
								<Row className="d-flex justify-content-center">
									<Card.Title>
										<h4 className="white-bg">{store.swapCart[0].name_of_puzzle}</h4>
									</Card.Title>
								</Row>

								<Col className="text-center">
									<Row>
										<Card.Img src={store.swapCart[0].picture_of_box} />
									</Row>
								</Col>
								<Card.Text className="text-center">
									<strong>Description:</strong>{" "}
									<p>
										cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
										proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
									</p>
								</Card.Text>
								<Col>
									<Row />
								</Col>
							</Card.Body>
						</Card>
					</Container>

					<br />
					<div className="text-center-right">
						<p>Included in your subscription</p>

						<p>
							{" "}
							Ship to:
							<br />
							{store.user && store.user.info.full_name}
							<br />
							{store.user && store.user.info.address}
							<br />
							{store.user && store.user.info.city}
							{", "} {store.user && store.user.info.state} {store.user && store.user.info.zip}{" "}
						</p>
						<br />
						<p>
							Please note that we will ship your order as soon as we receive and verify your puzzle.
							&nbsp; &nbsp;
						</p>
						<br />
						<Button
							className="button-redesign"
							type="submit"
							onClick={() => {
								history.push("/pending");
							}}>
							Submit Order
						</Button>

						<br />
						<br />
					</div>
				</div>
			) : (
				<h1>Empty Cart</h1>
			)}
		</Container>
	);
};
