import { Layout } from "../Components/Layout/Layout";
import { Link } from "react-router-dom";

export const TermsPage = () => {
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
				<h1>Terms and Conditions</h1>

				<p style={{ lineHeight: 1.7 }}>
					By using How Long Since?, you agree to the following terms and
					conditions.
				</p>

				<h2 style={{ marginTop: "1.5rem" }}>Use of Content</h2>

				<p style={{ lineHeight: 1.7 }}>
					All content on this site is provided for general informational
					purposes only. While we strive for accuracy, we make no guarantees
					regarding completeness or correctness.
				</p>

				<p style={{ lineHeight: 1.7 }}>
					Users may view, share, and link to content for personal or educational
					use. Republishing or redistributing content for commercial purposes is
					not permitted without permission.
				</p>

				<h2 style={{ marginTop: "1.5rem" }}>No Professional Advice</h2>

				<p style={{ lineHeight: 1.7 }}>
					Content on this site does not constitute legal, medical, financial, or
					professional advice.
				</p>

				<h2 style={{ marginTop: "1.5rem" }}>External Sources</h2>

				<p style={{ lineHeight: 1.7 }}>
					This site may link to third-party sources. We are not responsible for
					the content or availability of external websites.
				</p>

				<h2 style={{ marginTop: "1.5rem" }}>Limitation of Liability</h2>

				<p style={{ lineHeight: 1.7 }}>
					How Long Since? shall not be held liable for any damages arising from
					the use of this site or reliance on its content.
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
