import React, { useState } from "react";
import { ServicesModal } from "../Modal/ServiceModal";
import "./Navbar.css";

export const Navbar: React.FC = () => {
	const [servicesOpen, setServicesOpen] = useState(false);

	return (
		<>
			<nav className="navbar-container">
				<div className="navbar-left">
					<a href="/" className="navbar-link">
						<img className="logo" src="logo.png" />
						NSCO Electric
					</a>
				</div>

				<div className="navbar-center">
					<a href="/" className="navbar-link">
						Home
					</a>
					<a href="/about.html" className="navbar-link">
						About
					</a>
					<a href="/contact.html" className="navbar-link">
						Contact
					</a>

					<button
						className="navbar-link navbar-button"
						onClick={() => setServicesOpen(true)}
					>
						Services
					</button>
				</div>

				<div className="navbar-right">
					{/* <a className="navbar-link-nohover navbar-social">
						<img src="facebook.avif" />
					</a>
					<a className="navbar-link-nohover navbar-social">
						<img src="instagram.avif" />
					</a>
					<a className="navbar-link-nohover navbar-social">
						<img src="linkedin.avif" />
					</a> */}
				</div>
			</nav>

			{servicesOpen && <ServicesModal onClose={() => setServicesOpen(false)} />}
		</>
	);
};
