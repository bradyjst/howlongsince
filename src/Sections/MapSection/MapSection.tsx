import "./MapSection.css";
export const MapSection = () => {
	return (
		<section className="map-section">
			<div className="map-container">
				<h2>Our Location in Maple Ridge</h2>

				<div className="reviews-embed">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5209.401710584116!2d-122.56560992270676!3d49.244160571387184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54842b5779d1e52b%3A0xf7f06e6d90bbd9a4!2snscoelectric!5e0!3m2!1sen!2sca!4v1766292446299!5m2!1sen!2sca"
						width="100%"
						height="450"
						style={{ border: 0 }}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>
				</div>
			</div>
		</section>
	);
};
