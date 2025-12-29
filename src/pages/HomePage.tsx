import { useEffect } from "react";
import { Layout } from "../Components/Layout/Layout";
import { HeroSection } from "../Sections/HeroSection/HeroSection";
import { TalkingSection } from "../Sections/TalkingSection/TalkingSection";
import { ReviewsSection } from "../Sections/ReviewSection/ReviewSection";
import { ServicesSection } from "../Sections/ServiceSection/ServiceSection";
import "../animations.css";
import { CoverageAreas } from "../Components/CoverageList/CoverageAreas";
import { MapSection } from "../Sections/MapSection/MapSection";

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
			<HeroSection />
			<ServicesSection />
			<TalkingSection />
			<CoverageAreas />
			<MapSection />
			<ReviewsSection />
		</Layout>
	);
};
