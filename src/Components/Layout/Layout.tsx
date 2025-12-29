import "./Layout.css";
import { Footer } from "../Footer/Footer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className=".homepage-container">
			<main>{children}</main>
			<Footer />
		</div>
	);
};
