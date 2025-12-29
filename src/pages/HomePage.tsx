import { useEffect } from "react";
import { Layout } from "../Components/Layout/Layout";
import "../animations.css";
import { ServicesSection } from "../Sections/ServiceSection/ServiceSection";
export const HomePage = () => {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 }
		);

		document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, []);

	return (
		<Layout>
			<ServicesSection />
		</Layout>
	);
};
