import type { EventSource } from "../../types";
import "./EventSources.css";

type EventSourcesProps = {
	sources: EventSource[];
};

export const EventSources = ({ sources }: EventSourcesProps) => {
	return (
		<section className="event-sources">
			<h2>Sources</h2>
			<ul>
				{sources.map((source) => (
					<li key={source.url}>
						<a href={source.url} target="_blank" rel="noreferrer">
							{source.label}
						</a>
					</li>
				))}
			</ul>
		</section>
	);
};
