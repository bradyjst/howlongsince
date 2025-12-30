import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer: React.FC = () => {
	return (
		<footer className="site-footer">
			<div className="footer-content">
				<div className="footer-col footer-left">
					<span className="footer-name">How Long Since?</span>
				</div>

				<div className="footer-col footer-center">
					<Link to="/about" className="footer-link">
						About
					</Link>
					<Link to="/privacy-policy" className="footer-link">
						Privacy Policy
					</Link>
					<Link to="/terms" className="footer-link">
						Terms
					</Link>
				</div>

				<div className="footer-col footer-right">
					<span className="footer-note">© {new Date().getFullYear()}</span>
				</div>
			</div>
		</footer>
	);
};
