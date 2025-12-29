import "./HeroSection.css";
import { Navbar } from "../../Components/NavBar/Navbar";
export const HeroSection = () => {
	return (
		<section className="homepage-image-container">
			<div className="homepage-image-content">
				<Navbar />
				<div className="h-container">
					<h2 className="homepage-image-h2">Licensed FSR Electrician</h2>
					<h3 className="homepage-image-h3">
						<a className="hero-link" href="/contact">
							BOOK NOW
						</a>{" "}
					</h3>
					<h3>For electrical emergencies, please call:</h3>
					<h3 className="homepage-image-h3">1-778-344-2686</h3>
				</div>
			</div>
		</section>
	);
};
