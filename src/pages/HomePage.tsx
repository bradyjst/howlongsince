import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../Components/Layout/Layout";
import { EVENT_CATEGORIES } from "../events";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "../Components/PageHeader/PageHeader";
import SearchBar from "../Components/SearchBar/SearchBar";
import { supabase } from "../lib/supabase";
import "../animations.css";
import "./CSS/HomePage.css";

type EventRow = {
	id: string;
	title: string;
	slug: string;
	summary: string | null;
};

export const HomePage = () => {
	const [query, setQuery] = useState("");
	const [events, setEvents] = useState<EventRow[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		supabase
			.from("events")
			.select("id, title, slug, summary")
			.eq("verified", true)
			.is("deleted_at", null)
			.then(({ data }) => {
				if (data) setEvents(data);
				setLoading(false);
			});
	}, []);

	const MIN_QUERY_LENGTH = 3;

	const filteredEvents =
		query.length < MIN_QUERY_LENGTH
			? []
			: events.filter((event) => {
					const searchableText = `
            ${event.title}
            ${event.summary ?? ""}
            how long since
          `.toLowerCase();

					return searchableText.includes(query.toLowerCase());
			  });

	const navigate = useNavigate();

	async function goToRandomEvent() {
		const { data, error } = await supabase
			.from("events")
			.select("slug")
			.eq("verified", true);

		if (error || !data || data.length === 0) return;

		const random = data[Math.floor(Math.random() * data.length)];
		navigate(`/how-long-since/${random.slug}`);
	}

	async function goToRandomFromCategory(category: string) {
		const { data, error } = await supabase
			.from("events")
			.select("slug")
			.eq("verified", true)
			.eq("category", category);

		if (error || !data || data.length === 0) return;

		const index = crypto.getRandomValues(new Uint32Array(1))[0] % data.length;

		navigate(`/how-long-since/${data[index].slug}`);
	}

	return (
		<Layout>
			<PageHeader title="How Long Since?" />

			<SearchBar onSearch={setQuery} />

			{query.length >= MIN_QUERY_LENGTH && (
				<ul className="search-results">
					{filteredEvents.length === 0 && !loading && (
						<li className="search-empty">No results found.</li>
					)}

					{filteredEvents.map((event) => (
						<li key={event.id}>
							<Link to={`/how-long-since/${event.slug}`}>
								How long since {event.title}?
							</Link>
						</li>
					))}
				</ul>
			)}
			<div className="category-buttons">
				<button className="category-btn random" onClick={goToRandomEvent}>
					🎲 Random Event
				</button>

				{EVENT_CATEGORIES.map((cat) => (
					<button
						key={cat}
						onClick={() => goToRandomFromCategory(cat)}
						className="category-btn"
					>
						{cat}
					</button>
				))}
			</div>

			<section className="home-about">
				<p>
					<strong>How Long Since?</strong> is a living reference of major
					moments in history, politics, science, culture, and technology.
				</p>

				<p>
					Each entry answers one question: <em>how long has it been?</em>
				</p>
			</section>
		</Layout>
	);
};
