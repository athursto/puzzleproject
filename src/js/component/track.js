import React from "react";
import { useState, useEffect, useContext } from "react";
// //import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Col, Row, Form } from "react-bootstrap";
import XMLViewer from "react-xml-viewer";
import beautify from "xml-beautifier";
import XMLParser from "react-xml-parser";

export const Track = props => {
	const { store, actions } = useContext(Context);
	const [status, setStatus] = useState([]);

	//let trackingID = "9405509206094187580404";
	//let trackingID = "9274890233786806044910";
	let trackingID = "9400116901628130956461";

	async function getTracking() {
		let tracking = await actions.track(trackingID);
		console.log("tracking", tracking);
		// if (typeof tracking !== "null" && typeof tracking !== "undefined") {
		// 	var xml = new XMLParser().parseFromString(tracking);
		// 	setStatus(xml);
		// }
		if (tracking !== null || tracking !== undefined) {
			var xml = new XMLParser().parseFromString(tracking);
			console.log("XML", xml);
			//setStatus(xml.children[0].children[0].children);
			setStatus(xml.children[0].children);
		}
	}

	const getXML = () => {
		if (status !== null) {
			var i;
			var x = status.length;
			for (i = 0; i < x; i++) {
				console.log(status);
			}
			//this should be a map :( )
			//

			return (
				<>
					{status &&
						status.map((item, index) => {
							return <div key={index}> {`${item.name}:  ${item.value}`}</div>;
						})}
					{/* <h2>{status.name}</h2> */}
					{/* <p>{status.children[0].children[0].children[1].value}</p> */}
					{/* {status.children[0].children[0] && */}
					{/* {status.children[0].length > 0 && */}
					{/* status.children[0].map((item, index) => { */}
					{/* return console.log(item.children[0]); */}
					{/* //<p key={index}>{item.children[index].value}</p> */}
					{/* })} */}
					{/* <p>{status.children[0].children[0].value}</p>
					<p>{status.children[0].children[1].value}</p>
					<p>{status.children[0].children[2].value}</p>
					<p>{status.children[0].children[3].value}</p>
					<p>{status.children[0].children[4].value}</p>
					<p>{status.children[0].children[5].value}</p> */}
					{/* above works for first tracking ID... how to find the pattern?? */}
				</>
			);
		} else return null;
	};

	return (
		<div className="container">
			<h4 className="test text-center">Where&apos;s My Order?</h4>

			<p>
				<b>
					<Link onClick={getTracking}>Track Order #00001</Link>
				</b>
			</p>
			{getXML()}
		</div>
	);
};
