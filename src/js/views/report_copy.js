import React, { userEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";
init("user_olXEOuxbv8BLNtWnrQbTk");

export const Reportv2 = () => {
	const { register, handleSubmit, watch, errors } = useForm();
	const [statusMessage, setStatusMessage] = useState("Message");
	const message = watch("user_message") || "";
	const messageCharsLeft = 1500 - message.length;
	const onSubmit = data => {
		const statusMessage = document.querySelector(".status-message");
		const form = document.querySelector("#contact-form2");
		// console.log(data);
		sendForm("Puzzle Swap", "template_mjggq7d", "#contact-form2").then(
			function(response) {
				form.reset();
				console.log("SUCCESS!", response.status, response.text);
				setStatusMessage("Message sent!");
				statusMessage.className = "status-message success";
				setTimeout(() => {
					statusMessage.className = "status-message";
				}, 5000);
			},
			function(error) {
				console.log("FAILED...", error);
				setStatusMessage("Failed to send message! Please try again later.");
				statusMessage.className = "status-message failure";
				setTimeout(() => {
					statusMessage.className = "status-message";
				}, 5000);
			}
		);
	};

	//in class we had all actions in the flux file, should probably move this over

	return (
		<div className="container text-center">
			<Form onSubmit={handleSubmit(onSubmit)} id="contact-form2">
				<h3>Get in touch</h3>
				<div className="status-message">
					<h4>{statusMessage}</h4>
				</div>
				<Form.Group controlId="formBasicIngo">
					{errors.user_name &&
						errors.user_name.type === "required" && (
							<div role="alert">
								Please enter your name
								<br />
							</div>
						)}
					{/* <Form.Label>Name</Form.Label> */}
					<Form.Control
						type="text"
						placeholder="Your Name"
						ref={register({ required: true })}
						name="user_name"
					/>
				</Form.Group>
				<Form.Group controlId="formBasicEmail">
					{errors.user_email &&
						errors.user_email.type === "required" && (
							<div role="alert">
								Your Email
								<br />
							</div>
						)}
					{/* <Form.Label>Email address</Form.Label> */}
					<Form.Control
						type="email"
						placeholder="Enter email"
						ref={register({ required: true })}
						name="user_email"
					/>
				</Form.Group>

				<Form.Group controlId="formPuzzleInfo">
					{/* <Form.Label>Order ID (optional)</Form.Label> */}
					<Form.Control
						type="number"
						placeholder="Order ID Number (optional)"
						ref={register({ required: false })}
						name="user_order"
					/>
				</Form.Group>
				<Form.Group controlId="issue">
					{errors.user_message &&
						errors.user_message.type === "required" && (
							<div role="alert">
								Please tell us your question or comment
								<br />
							</div>
						)}
					{/* <Form.Label>What&lsquo;s the Issue?</Form.Label> */}
					<Form.Control
						as="textarea"
						rows="3"
						ref={register({ required: true })}
						name="user_message"
						placeholder="How can we help?"
						maxLength="1500"
					/>
					<div className="message-chars-left">
						<p>{messageCharsLeft} characters remaining</p>
					</div>
				</Form.Group>
				<Button className="button-redesign" type="submit">
					Send
				</Button>
			</Form>
		</div>
	);
};
