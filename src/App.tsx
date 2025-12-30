import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { EventPage } from "./Pages/EventPage";
import { AboutPage } from "./Pages/About";
import { PrivacyPolicyPage } from "./Pages/PrivacyPolicy";
import { TermsPage } from "./Pages/TermsConditions";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/how-long-since/:id" element={<EventPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
				<Route path="/terms" element={<TermsPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
