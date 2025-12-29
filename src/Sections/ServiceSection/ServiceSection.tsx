import "./ServiceSection.css";
import { ServiceCard } from "../../Components/ServiceCard/ServiceCard";

const SERVICES = [
	{
		image: "evcharger.jpg",
		alt: "electric vehicle charger installation",
		link: "evchargers.html",
		title: "EV Chargers",
		description:
			"From installation to maintenance, we provide comprehensive electric vehicle charging solutions to meet your needs and keep your EV running smoothly.",
	},
	{
		image: "ring-camera.avif",
		alt: "security camera installation",
		link: "securitycameras.html",
		title: "Security Cameras",
		description:
			"Protect your property with state-of-the-art security camera systems. Our expert team ensures professional installation and setup for maximum security.",
	},
	{
		image: "residence.jpg",
		alt: "residential electrical services",
		link: "residential.html",
		title: "Residential",
		description:
			"Our residential electrical services cover everything from lighting and wiring to electrical panel upgrades. Trust us to keep your home safe and functional.",
	},
	{
		image: "commercial.jpg",
		alt: "commercial electrical services",
		link: "commercial.html",
		title: "Commercial",
		description:
			"We offer a wide range of electrical solutions for businesses, including wiring, lighting, and electrical system upgrades to ensure smooth operations.",
	},
];

export const ServicesSection = () => {
	return (
		<section className="homepage-services-container reveal">
			<h1 className="homepage-h1">Services</h1>
			<div className="homepage-services">
				{SERVICES.map((service) => (
					<ServiceCard key={service.title} {...service} />
				))}
			</div>
		</section>
	);
};
