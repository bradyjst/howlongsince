import { Layout } from "../Components/Layout/Layout";
import { Link } from "react-router-dom";

export const AboutPage = () => {
	return (
		<Layout>
			<div
				style={{
					maxWidth: "640px",
					margin: "0 auto",
					textAlign: "center",
					marginTop: "3rem",
				}}
			>
				<h1>About How Long Since?</h1>

				<p style={{ lineHeight: 1.7 }}>
					<strong>How Long Since?</strong> is a reference website that tracks
					how much time has passed since significant events in history,
					politics, science, culture, and technology.
				</p>

				<p style={{ lineHeight: 1.7 }}>
					The site is designed to answer a simple question:{" "}
					<em>how long has it been since something happened?</em> — using clear
					timestamps, neutral summaries, and publicly available sources.
				</p>

				<p style={{ lineHeight: 1.7 }}>
					Entries on this site cover a wide range of topics, from major world
					events and political milestones to cultural moments and scientific
					breakthroughs. Each event is presented in a factual, non-editorial
					manner.
				</p>

				<p style={{ lineHeight: 1.7 }}>
					How Long Since? is a growing archive. New events are added over time,
					and existing entries may be updated as additional sources or
					clarifications become available.
				</p>

				<p style={{ lineHeight: 1.7 }}>
					This site is intended for informational purposes only.
				</p>

				<div style={{ marginTop: "2rem" }}>
					<Link to="/" style={{ color: "var(--accent-primary)" }}>
						← Back to Home
					</Link>
				</div>
			</div>
		</Layout>
	);
};
