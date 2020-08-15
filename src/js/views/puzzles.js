import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { CardRow } from "../component/cards";

export const Puzzles = () => (
	<div className="text-center mt-5">
		<CardRow cardData={store.puzzles} category="Category" />
	</div>
);
