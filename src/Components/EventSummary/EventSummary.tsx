import "./EventSummary.css";

type EventSummaryProps = {
	summary: string;
};

export const EventSummary = ({ summary }: EventSummaryProps) => {
	return <p className="event-summary">{summary}</p>;
};
