import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "../Components/Layout/Layout";
import { events } from "../events";
import { PageHeader } from "../Components/PageHeader/PageHeader";
import { TimeSinceDisplay } from "../Components/TimeSinceDisplay/TimeSinceDisplay";
import { EventSummary } from "../Components/EventSummary/EventSummary";
import { EventSources } from "../Components/EventSources/EventSources";
import { AdSlot } from "../Components/AdSlot/AdSlot";

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
	const { id } = useParams<{ id: string }>();
	const event = events.find((e) => e.id === id);
	const [now, setNow] = useState(() => Date.now());

	useEffect(() => {
		const interval = setInterval(() => {
			setNow(Date.now());
		}, 60000);

		return () => clearInterval(interval);
	}, []);

	const time = useMemo(() => {
		if (!event) return null;
		return getTimeSince(new Date(event.occurredAt), now);
	}, [event, now]);

	if (!event) {
		return (
			<Layout>
				<h1>Event not found</h1>
				<p>This event does not exist.</p>
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

				<AdSlot />

				<EventSummary summary={event.summary} />

				<EventSources sources={event.sources} />
			</div>
		</Layout>
	);
};
