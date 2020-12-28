import Alert from "react-bootstrap/Alert";
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

export const Subscribe = props => {
	return (
		<div className="container">
			<h4>Welcome to Puzzle Swap!</h4>
			<p>It&apos;s good to see you. </p>
			<b />
			<p>
				In order to ship and receive puzzles, a subscription of $5.99/month is required as well as an upload and
				shippment of a puzzle of your own.
			</p>
			<b />
			<p>
				Please click subscribe in order to start your Puzzle Swap experience.
				<br />
				<i>[This is a demonstration of using the Paypal API, not intended for actual payment.]</i>
				<p />
			</p>
			<b />
			<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
				<input type="hidden" name="cmd" value="_s-xclick" />
				<input type="hidden" name="hosted_button_id" value="U9HQFHCLC8YEJ" />
				<input
					type="image"
					src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif"
					border="0"
					name="submit"
					alt="PayPal - The safer, easier way to pay online!"
				/>
				<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
			</form>
		</div>
	);
};
