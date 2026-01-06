import "./TimeSinceDisplay.css";

type TimeSince = {
	years: number;
	days: number;
	hours: number;
};

type TimeSinceDisplayProps = {
	time: TimeSince;
};

export const TimeSinceDisplay = ({ time }: TimeSinceDisplayProps) => {
	return (
		<div className="time-since">
			<div className="time-row">
				<span className="time-value">{time.years}</span>
				<span className="time-unit"> years</span>
			</div>

			<div className="time-row">
				<span className="time-value">{time.days}</span>
				<span className="time-unit"> days</span>
			</div>

			<div className="time-row">
				<span className="time-value">{time.hours}</span>
				<span className="time-unit"> hours</span>
			</div>

			<div className="time-row">
				<span className="time-unit">.</span>
			</div>
		</div>
	);
};
