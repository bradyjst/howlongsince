import "./Callout.css";
import type { ReactNode } from "react";

type CalloutProps = {
	children: ReactNode;
};

export const Callout = ({ children }: CalloutProps) => {
	return (
		<section className="callout">
			<div className="callout-container">{children}</div>
		</section>
	);
};
