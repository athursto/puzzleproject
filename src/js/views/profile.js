import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Pagination from "react-bootstrap/Pagination";
import Form from "react-bootstrap/Form";
import Profilepic from "../../img/profilepic3.jpg";
import avatar from "../../img/avatar.png";

export const Profile = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div className="card col-7 m-auto">
				<div className="row">
					<div className="col-6 card-img float-right p-3">
						<img
							className="col-sm-6 rounded-circle"
							src={avatar}
							alt="profilePic"
							width="100px"
							height="100px"
						/>
					</div>
					<div className="col-6 p-3">
						<button className="btn float-right">
							<i className="fas fa-pencil-alt" />
						</button>
						<h5 className="card-title">{store.user && store.user.info && store.user.info.full_name}</h5>
						<p className="card-text">
							{" "}
							<i className="fas fa-map-marker-alt" /> &nbsp;
							{store.user && store.user.info && store.user.info.address}
							<br />
							&nbsp;
							{store.user && store.user.info && store.user.info.city}
							{", "}
							{store.user && store.user.info && store.user.info.state}{" "}
							{store.user && store.user.info && store.user.info.zip}
						</p>
						<p className="card-text">
							<i className="fa fa-envelope fa-fw" /> &nbsp;
							{store.user && store.user.info && store.user.info.email}
						</p>
					</div>
				</div>
			</div>
			<br />
			<br />
			<div className="row">
				{store.user.info != null && store.user.info.puzzles_owned.length > 0 ? (
					<div className="col-6">
						<h3>You own this puzzle:</h3>
						<br />
						<h4>{store.user && store.user.info && store.user.info.puzzles_owned[0].name_of_puzzle} </h4>
						<img
							className="profilepuzzlepic"
							src={store.user && store.user.info && store.user.info.puzzles_owned[0].picture_of_puzzle}
						/>
					</div>
				) : (
					<div className="col-6">
						<Link to="/swap" className="btn btn-outline-info mt-5 p-3">
							Please upload your puzzle to start swapping
						</Link>
					</div>
				)}
				{store.swapCart ? (
					<div className="col-6">
						<h3>You borrowed this puzzle:</h3>
						<br />
						<h4>{store.swapCart && store.swapCart[0].name_of_puzzle}</h4>
						<img className="profilepuzzlepic" src={store.swapCart && store.swapCart[0].picture_of_puzzle} />
					</div>
				) : (
					<div className="col-6">
						<Link to="/puzzles" className="btn btn-outline-info mt-5 p-3">
							Browse Puzzles and add one to your cart!
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};
