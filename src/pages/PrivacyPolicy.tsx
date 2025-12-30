import { Layout } from "../Components/Layout/Layout";
import { Link } from "react-router-dom";

export const PrivacyPolicyPage = () => {
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
				<h1>Privacy Policy</h1>

				<p style={{ lineHeight: 1.7 }}>
					Your privacy is important to us. How Long Since? does not require
					users to create accounts or provide personal information in order to
					access content.
				</p>

				<h2 style={{ marginTop: "1.5rem" }}>Information Collection</h2>

				<p style={{ lineHeight: 1.7 }}>
					We do not knowingly collect personal information such as names, email
					addresses, or payment details.
				</p>

				<p style={{ lineHeight: 1.7 }}>
					Like most websites, limited non-personal information may be collected
					automatically, including browser type, device type, general location,
					and pages visited. This information is used only to understand site
					usage and improve content.
				</p>

				<h2 style={{ marginTop: "1.5rem" }}>Cookies and Advertising</h2>

				<p style={{ lineHeight: 1.7 }}>
					This site may use cookies and similar technologies for analytics and
					advertising purposes. Third-party advertising partners, including
					Google AdSense, may use cookies to serve ads based on visits to this
					and other websites.
				</p>

				<p style={{ lineHeight: 1.7 }}>
					Users may opt out of personalized advertising by visiting Google’s ad
					settings.
				</p>

				<h2 style={{ marginTop: "1.5rem" }}>External Links</h2>

				<p style={{ lineHeight: 1.7 }}>
					This site may contain links to external websites. We are not
					responsible for the privacy practices or content of those sites.
				</p>

				<p style={{ lineHeight: 1.7 }}>
					This privacy policy may be updated from time to time. Any changes will
					be reflected on this page.
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
