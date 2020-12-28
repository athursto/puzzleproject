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

export const Singlepuzzle = props => {
	const { title, data } = props;
	const { store, actions } = useContext(Context);
	let history = useHistory();
	const { id } = useParams();
	const [active, setActive] = useState(1);
	const [src, setSrc] = useState(store.puzzleFetch[id].picture_of_box);

	useEffect(
		() => {
			if (active === 1) {
				setSrc(store.puzzleFetch[id].picture_of_box);
			} else {
				setSrc(store.puzzleFetch[id].picture_of_puzzle);
			}
		},
		[active]
	);

	// console.log("the id: ", id, store.puzzleFetch);
	console.log("the id: ", store.puzzleFetch[id]);

	const paginationBasic = (
		<div>
			<Pagination size="sm">
				<Pagination.Item key="1" active={active === 1} onClick={e => setActive(1)}>
					1
				</Pagination.Item>
				<Pagination.Item key="2" active={active === 2} onClick={e => setActive(2)}>
					2
				</Pagination.Item>
			</Pagination>
		</div>
	);
	//how to render the above inside of return

	return (
		<Container>
			{store.puzzleFetch.length > 0 ? (
				typeof store.puzzleFetch[id] !== "undefined" ? (
					<Card>
						<Card.Body>
							<Row className="d-flex justify-content-center">
								<Card.Title>
									<h3 className="white-bg">{store.puzzleFetch[id].name_of_puzzle}</h3>
								</Card.Title>
							</Row>
							<Row>
								<Col className="text-center">
									<Row>
										<Card.Img src={src} />
										{/* need to constrain these images */}
									</Row>
									<Row>{paginationBasic}</Row>
								</Col>
								<Col>
									<Card.Text className="text-center">
										<strong>Description:</strong>{" "}
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
										</p>
										<br />
										<strong>Ages:</strong> <p>{store.puzzleFetch[id].age_range}</p>
										<br />
										<strong>No. pieces:</strong> <p>{store.puzzleFetch[id].number_of_pieces}</p>
										<br />
										<strong>Theme:</strong> <p>{store.puzzleFetch[id].category}</p>
										{store.user.info != null && store.user.info.puzzles_owned.length > 0 ? (
											<React.Fragment>
												<Button
													className="button-redesign text-center"
													onClick={() => {
														actions.addtoCart(store.puzzleFetch[id]);
														history.push("/swapcart");
													}}>
													Add to Cart
												</Button>
											</React.Fragment>
										) : (
											<Button className="button-redesign" onClick={e => history.push("/swap")}>
												Please Upload Your Puzzle to start SWAPING
											</Button>
										)}
									</Card.Text>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				) : (
					<h3>Puzzle Not Found</h3>
				)
			) : (
				<h3>Loading...</h3>
			)}
		</Container>
	);
};

Singlepuzzle.propTypes = {
	match: PropTypes.object,
	title: PropTypes.string,
	data: PropTypes.string,
	pieces: PropTypes.number,
	ages: PropTypes.string
};
