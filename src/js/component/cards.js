import React from "react";
import { useState, useEffect, useContext } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Button from "react-bootstrap/Button";
import { Link, useParams, useHistory } from "react-router-dom";

export const CardRow = props => {
	const { cardData, category, title, data } = props;
	const { store, actions } = useContext(Context);
	let history = useHistory();
	return (
		<div className="container scrolling-wrapper" id="main-puzzle" style={{ height: "30%" }}>
			<div className="row">
				{/* <h2 style={{ textAlign: "left" }}>{category}</h2> */}
				{/* <CardDeck className="deck" style={{ height: "200px" }}> */}
				{/* <CardDeck className="deck mb-5"> */}

				{data.map((item, index) => {
					return (
						<div className="col-3 mb-4" key={index}>
							<Card className="cardonly" style={{ width: "100%" }}>
								<Card.Img variant="top" src={item.picture_of_puzzle} />
								<Card.Body>
									<Card.Title>{item.name_of_puzzle}</Card.Title>
									<Card.Text>
										{/* Description: {item.text} */}
										<br />
										No. Pieces: {item.number_of_pieces}
										<br />
										Ages: {item.age_range}
									</Card.Text>
									{store.user.info != null ? (
										<React.Fragment>
											<Button
												className="button-redesign"
												onClick={e => history.push(`/singlepuzzle/${index}`)}>
												{" "}
												See More
											</Button>
										</React.Fragment>
									) : (
										<Button className="button-redesign" onClick={e => history.push("/signin")}>
											{" "}
											See More
											{/* <Link to="/signin">See More</Link> */}
										</Button>
									)}
								</Card.Body>
							</Card>
						</div>
					);
				})}
				{/* </CardDeck> */}
			</div>
		</div>
	);
};
CardRow.propTypes = {
	cardData: PropTypes.array.isRequired,
	category: PropTypes.string.isRequired,
	title: PropTypes.string,
	data: PropTypes.string,
	pieces: PropTypes.number,
	ages: PropTypes.string,
	data: PropTypes.string
};

export default CardRow;
