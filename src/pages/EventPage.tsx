import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "../Components/Layout/Layout";
import { PageHeader } from "../Components/PageHeader/PageHeader";
import { TimeSinceDisplay } from "../Components/TimeSinceDisplay/TimeSinceDisplay";
import { EventSummary } from "../Components/EventSummary/EventSummary";
import { EventSources } from "../Components/EventSources/EventSources";
import "./CSS/EventPage.css";
import { AdSlot } from "../Components/AdSlot/AdSlot";
import { EventReactions } from "../Components/EventReactions/EventReactions";
import { supabase } from "../lib/supabase";

type EventRow = {
	id: string;
	title: string;
	occurred_at: string;
	summary: string | null;
	sources: { label: string; url: string }[] | null;
	reactions: Record<string, number> | null;
};

function getTimeSince(occurredAt: Date, nowMs: number) {
	const diff = nowMs - occurredAt.getTime();

	const minutes = Math.floor(diff / 60000);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);
	const years = Math.floor(days / 365.25);

	return {
		years,
		days: days % 365,
		hours: hours % 24,
		minutes: minutes % 60,
	};
}

export const EventPage = () => {
	const { slug } = useParams<{ slug: string }>();
	const [event, setEvent] = useState<EventRow | null>(null);
	const [loading, setLoading] = useState(true);
	const [now, setNow] = useState(() => Date.now());

	useEffect(() => {
		if (!slug) return;

		supabase
			.from("events")
			.select("id, title, occurred_at, summary, sources, reactions")
			.eq("slug", slug)
			.single()
			.then(({ data }) => {
				setEvent(data ?? null);
				setLoading(false);
			});
	}, [slug]);

	// SEO: title + meta description
	useEffect(() => {
		if (!event) return;

		document.title = `How long since ${event.title}? | HowLongSince`;

		const description = `Find out how long it has been since ${event.title}. Updated in real time.`;

		let meta = document.querySelector(
			'meta[name="description"]'
		) as HTMLMetaElement | null;

		if (!meta) {
			meta = document.createElement("meta");
			meta.name = "description";
			document.head.appendChild(meta);
		}

		meta.content = description;
	}, [event]);

	// Update timer every minute
	useEffect(() => {
		const interval = setInterval(() => {
			setNow(Date.now());
		}, 60000);

		return () => clearInterval(interval);
	}, []);

	const time = useMemo(() => {
		if (!event) return null;
		return getTimeSince(new Date(event.occurred_at), now);
	}, [event, now]);

	if (loading) {
		return (
			<Layout>
				<p>Loading…</p>
			</Layout>
		);
	}

	if (!event) {
		return (
			<Layout>
				<h1>Event not found</h1>
				<Link to="/">← Back to home</Link>
			</Layout>
		);
	}

	return (
		<Layout>
			<div className="event-page">
				<PageHeader title="How Long Since" />
				<PageHeader title={`${event.title}?`} />

				{time && <TimeSinceDisplay time={time} />}

				<EventReactions eventId={event.id} reactions={event.reactions ?? {}} />

				<AdSlot />

				{event.summary && <EventSummary summary={event.summary} />}

				{event.sources && event.sources.length > 0 && (
					<EventSources sources={event.sources} />
				)}

				<Link to="/">← Back to home</Link>
			</div>
		</Layout>
	);
};
