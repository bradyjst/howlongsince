import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { EventPage } from "./pages/EventPage";
import { AboutPage } from "./pages/About";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicy";
import { TermsPage } from "./pages/TermsConditions";

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
