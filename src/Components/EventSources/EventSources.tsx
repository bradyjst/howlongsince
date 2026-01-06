import "./EventSources.css";

export type EventSource = {
	label: string;
	url: string;
};

type EventSourcesProps = {
	sources: EventSource[];
};

export const EventSources = ({ sources }: EventSourcesProps) => {
	return (
		<section className="event-sources">
			<ul>
				{sources.map((source) => (
					<li key={source.url}>
						<h2>
							<a href={source.url} target="_blank" rel="noreferrer">
								{source.label}
							</a>
						</h2>
					</li>
				))}
			</ul>
		</section>
	);
};
