import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Jumbotron";
import vector from "../../img/puzzle_vector.png";

export const HomeJumbo = () => (
	<Jumbotron className="jumbo-container">
		<div className="row">
			<div className="col-md-4 text-center">
				<img src={vector} style={{ height: "15rem" }} />
			</div>
			<div className="col-md-8">
				<h1 className="text-center align-middle" syle={{ fontSize: "7rem" }}>
					{" "}
					Puzzle Swap
				</h1>
			</div>
		</div>
	</Jumbotron>
);
