import "./ServiceSection.css";
import { ServiceCard } from "../../Components/ServiceCard/ServiceCard";

const SERVICES = [
	{
		image: "soon.avif",
		alt: "Under Construction",
		title: "Coming Soon",
		description:
			"A database for events and how long since they happened. Coming soon!",
	},
];

export const ServicesSection = () => {
	return (
		<section className="homepage-services-container reveal">
			<h1 className="homepage-h1">How long Since??</h1>
			<div className="homepage-services">
				{SERVICES.map((service) => (
					<ServiceCard key={service.title} {...service} />
				))}
			</div>
		</section>
	);
};
