import React from "react";
import "./Footer.css";

export const Footer: React.FC = () => {
	return (
		<footer className="site-footer">
			<div className="footer-content">
				<div className="footer-col footer-left">
					<span className="footer-name">
						NSCO Electric – Licensed Electrician
					</span>
				</div>

				<div className="footer-col footer-center">
					<a href="tel:1-778-344-2686" className="footer-link">
						1-778-344-2686
					</a>
				</div>

				<div className="footer-col footer-right">
					<a href="mailto:info@nscoelectric.com" className="footer-link">
						info@nscoelectric.com
					</a>
				</div>
			</div>
		</footer>
	);
};
