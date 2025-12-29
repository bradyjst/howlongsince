import "./GoogleRating.css";

export const GoogleRating = () => {
	return (
		<section className="google-rating-section">
			<div className="google-rating-container">
				<img className="google-avatar" src="google.jpg" alt="google logo" />
				<h2 className="google-rating-container">5 stars</h2>
				<span className="google-rating-stars">★★★★★</span>

				<p>Trusted by homeowners and businesses across the Lower Mainland</p>
			</div>
		</section>
	);
};
