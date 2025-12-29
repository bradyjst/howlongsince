import "./ContactCard.css";

export const ContactCard: React.FC = () => {
	return (
		<>
			<div className="contact-card">
				<h1>Book an Appointment</h1>
				<p className="contact-subtext">
					Choose a time that works best for you.
				</p>

				<div className="calendly-wrapper">
					<iframe
						src="https://calendly.com/morid-merat"
						width="100%"
						height="900"
						loading="lazy"
					/>
				</div>
			</div>
		</>
	);
};
