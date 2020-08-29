import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export const MyNavbar = () => (
	<div className="container">
		<Navbar bg="light" expand="lg">
			<i className="fas fa-puzzle-piece" />
			&nbsp;
			<Navbar.Brand href="#home" className="font-weight-bold">
				PUZZLE SWAP
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto" />
				<Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button variant="outline-success">Search</Button>
				</Form>

				<NavDropdown title="Account" id="basic-nav-dropdown">
					<NavDropdown.Item href="#action/3.1">Sign In</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.2">Track Your Order</NavDropdown.Item>
					<NavDropdown.Item href="/puzzles">Browse Puzzles</NavDropdown.Item>
					<NavDropdown.Item href="/upload">Upload View</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.3">Contact Us</NavDropdown.Item>
				</NavDropdown>
			</Navbar.Collapse>
			<Nav.Link href="#link">
				<i className="fas fa-shopping-cart" />
			</Nav.Link>
		</Navbar>
	</div>
);
