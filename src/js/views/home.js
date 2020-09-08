import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
//import React, { useContext } from "react";
import "../../styles/home.scss";
import { CardRow } from "../component/cards";
import { Login } from "./login";
import { HomeJumbo } from "../component/homejumbo";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div>
				<HomeJumbo />
			</div>
			<div className="container">
				<CardRow cardData={store.puzzles} />
			</div>
		</div>
	);
};
