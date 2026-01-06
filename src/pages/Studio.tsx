import { useEffect, useRef, useState } from "react";
import { supabase } from "../lib/supabase";
import { generateUniqueSlug } from "../utils/slug";
import { searchWiki, getWikiSummary } from "../utils/wiki";
import { useNavigate } from "react-router-dom";

type EventPayload = {
	title: string;
	date: string;
	categories: string[];
	sourceUrl: string;
	summary: string;
	verified: boolean;
};

type WikiSearchResult = {
	pageid: number;
	title: string;
	snippet: string;
};

const EVENT_CATEGORIES = [
	"Politics",
	"Wars & Conflicts",
	"Disasters",
	"Deaths",
	"Science & Technology",
	"Space",
	"Health",
	"Economy",
	"Culture",
	"Sports",
	"Entertainment",
	"Crime",
	"Protests & Movements",
	"Companies & Products",
	"Internet & Media",
] as const;

const STUDIO_PASSWORD = import.meta.env.VITE_STUDIO_PASSWORD;

export default function Studio() {
	const navigate = useNavigate();
	const checked = useRef(false);

	const [authorized, setAuthorized] = useState(false);
	const [existingSlugs, setExistingSlugs] = useState<string[]>([]);
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState<string | null>(null);

	const [wikiQuery, setWikiQuery] = useState("");
	const [wikiResults, setWikiResults] = useState<WikiSearchResult[]>([]);

	const [form, setForm] = useState<EventPayload>({
		title: "",
		date: "",
		categories: [],
		sourceUrl: "",
		summary: "",
		verified: false,
	});

	const slug = generateUniqueSlug(form.title, existingSlugs);

	// auth
	useEffect(() => {
		if (checked.current) return;
		checked.current = true;

		const pw = prompt("Studio password");
		if (pw !== STUDIO_PASSWORD) {
			navigate("/");
		} else {
			setAuthorized(true);
		}
	}, [navigate]);

	// load existing slugs
	useEffect(() => {
		if (!authorized) return;

		supabase
			.from("events")
			.select("slug")
			.then(({ data }) => {
				if (data) setExistingSlugs(data.map((e) => e.slug));
			});
	}, [authorized]);

	async function runWikiSearch() {
		const results = await searchWiki(wikiQuery);
		setWikiResults(results);
	}

	async function submit(e: React.FormEvent) {
		e.preventDefault();
		setLoading(true);
		setMessage(null);

		try {
			const { error } = await supabase.from("events").insert({
				title: form.title,
				slug,
				occurred_at: form.date,
				categories: form.categories,
				summary: form.summary,
				verified: form.verified,
				sources: form.sourceUrl
					? [{ label: "Source", url: form.sourceUrl }]
					: [],
			});

			if (error) throw error;

			setMessage("✅ Event created");
			setForm({
				title: "",
				date: "",
				categories: [],
				sourceUrl: "",
				summary: "",
				verified: false,
			});
		} catch (err) {
			console.error(err);
			setMessage("❌ Error creating event");
		} finally {
			setLoading(false);
		}
	}

	if (!authorized) return null;

	return (
		<div style={{ padding: 24, maxWidth: 720 }}>
			<h1>Studio</h1>

			<hr />

			<h2>Wiki Ingest</h2>

			<input
				placeholder="Search Wikipedia"
				value={wikiQuery}
				onChange={(e) => setWikiQuery(e.target.value)}
			/>

			<button type="button" onClick={runWikiSearch}>
				Search
			</button>

			<ul>
				{wikiResults.map((r) => (
					<li key={r.pageid}>
						<button
							type="button"
							onClick={async () => {
								const summary = await getWikiSummary(r.title);
								setForm((f) => ({
									...f,
									title: summary.title,
									summary: summary.extract,
									sourceUrl: summary.content_urls.desktop.page,
								}));
							}}
						>
							{r.title}
						</button>
					</li>
				))}
			</ul>

			<form onSubmit={submit} style={{ display: "grid", gap: 12 }}>
				<input
					placeholder="Title"
					value={form.title}
					required
					onChange={(e) => setForm({ ...form, title: e.target.value })}
				/>

				<input
					type="datetime-local"
					value={form.date}
					required
					onChange={(e) => {
						const dateOnly = e.target.value.split("T")[0];
						setForm({ ...form, date: `${dateOnly}T00:00` });
					}}
				/>

				<div>
					<strong>Categories</strong>
					<div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
						{EVENT_CATEGORIES.map((cat) => (
							<label key={cat} style={{ fontSize: 14 }}>
								<input
									type="checkbox"
									checked={form.categories.includes(cat)}
									onChange={(e) =>
										setForm({
											...form,
											categories: e.target.checked
												? [...form.categories, cat]
												: form.categories.filter((c) => c !== cat),
										})
									}
								/>{" "}
								{cat}
							</label>
						))}
					</div>
				</div>

				<input
					placeholder="Source URL (optional)"
					value={form.sourceUrl}
					onChange={(e) => setForm({ ...form, sourceUrl: e.target.value })}
				/>

				<textarea
					placeholder="Summary"
					rows={10}
					value={form.summary}
					onChange={(e) => setForm({ ...form, summary: e.target.value })}
				/>

				<label>
					<input
						type="checkbox"
						checked={form.verified}
						onChange={(e) => setForm({ ...form, verified: e.target.checked })}
					/>{" "}
					Verified
				</label>

				<button disabled={loading}>
					{loading ? "Saving..." : "Create Event"}
				</button>

				{message && <p>{message}</p>}
			</form>
		</div>
	);
}
