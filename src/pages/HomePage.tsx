import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../Components/Layout/Layout";
import { PageHeader } from "../Components/PageHeader/PageHeader";
import SearchBar from "../Components/SearchBar/SearchBar";
import { events } from "../events";
import "../animations.css";
import "./CSS/HomePage.css";

export const HomePage = () => {
	const [query, setQuery] = useState("");

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

	const MIN_QUERY_LENGTH = 3;

	const filteredEvents =
		query.length < MIN_QUERY_LENGTH
			? []
			: events.filter((event) => {
					const searchableText = `
          ${event.title}
          ${event.summary}
          ${event.tags?.join(" ") ?? ""}
          how long since
        `.toLowerCase();

					return searchableText.includes(query.toLowerCase());
			  });

	return (
		<Layout>
			<PageHeader title="How Long Since?" />

			{/* Search */}
			<SearchBar onSearch={setQuery} />

			{/* Results */}
			{query && (
				<ul className="search-results">
					{filteredEvents.length === 0 && (
						<li className="search-empty">No results found.</li>
					)}

					{filteredEvents.map((event) => (
						<li key={event.id}>
							<Link to={`/how-long-since/${event.id}`}>
								How long since {event.title}?
							</Link>
						</li>
					))}
				</ul>
			)}

			<section className="home-about">
				<p>
					<strong>How Long Since?</strong> is a living reference of major
					moments in history, politics, science, culture, and technology;
					tracking how much time has passed since the events that shaped the
					world.
				</p>

				<p>
					From wars and presidencies to landmark discoveries and cultural
					milestones, each entry answers a simple question:{" "}
					<em>how long has it been?</em>
				</p>
			</section>
		</Layout>
	);
};
