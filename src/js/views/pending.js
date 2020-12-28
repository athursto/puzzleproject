import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { CardRow } from "../component/cards";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Pending = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h3 className="text-center"> Success! </h3>
			<p className="text-center">
				{" "}
				Your order of <b>{store.swapCart[0].name_of_puzzle}</b> has been submitted. Our team will be in touch
				soon with a tracking number and estimated arrival date.{" "}
			</p>

			<div className="card col-7 m-auto">
				<div className="row">
					<div className="col-6 card-img float-right p-3">
						<img
							className="col-sm-6 rounded-circle"
							style={{ width: "140px", height: "140px", borderRadius: "70px" }}
							src={store.swapCart[0].picture_of_box}
							alt="profilePic"
						/>
					</div>
					<div className="col-6 p-3">
						<h5 className="card-title">{store.swapCart[0].name_of_puzzle}</h5>
						<p className="card-text">
							<i className="fas fa-user-check" />
							&nbsp; {store.user && store.user.info && store.user.info.full_name} <br />
							<i className="fas fa-map-marker-alt" /> &nbsp;
							{store.user && store.user.info && store.user.info.address}
							<br />
							&nbsp;
							{store.user && store.user.info && store.user.info.city}
							{", "}
							{store.user && store.user.info && store.user.info.state}{" "}
							{store.user && store.user.info && store.user.info.zip}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
