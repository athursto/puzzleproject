import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import { Link, useParams, useHistory } from "react-router-dom";
//import React, { useContext } from "react";
import "../../styles/home.scss";
import { CardRow } from "../component/cards";
import { SignIn } from "./signin";
import { HomeJumbo } from "../component/homejumbo";
import { Context } from "../store/appContext";
import { Footer } from "../component/footer";
import vector from "../../img/puzzle_vector.png";

export const Homev2 = () => {
	const { store, actions } = useContext(Context);
	let history = useHistory();

	return (
		<div className="container testing">
			<div className="row h-100">
				<div className="col-sm">
					<h3>Puzzle Swap</h3>
					<p>
						Puzzle Swap delivers you a fresh puzzle every month without cluttering your place with boxes
						you’ll only touch once or making you constantly shell out for new puzzles. Forget about finding
						something fun to do at home and keep your mind engaged on the good stuff, like finding those
						edge pieces.
					</p>
					<Button variant="primary">
						<Link to="/registerpage">Register and start swapping!</Link>
					</Button>
				</div>
				<div className="col-sm">
					<img
						//style={{ width: "140px", height: "140px", borderRadius: "70px" }}
						src={vector}
						style={{ height: "30rem" }}
					/>
				</div>
			</div>
		</div>
	);
};
