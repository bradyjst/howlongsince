import "./TextBlock.css";
import type { ReactNode } from "react";

type TextBlockProps = {
	children: ReactNode;
};

export const TextBlock = ({ children }: TextBlockProps) => {
	return (
		<section className="text-block">
			<div className="text-block-container">{children}</div>
		</section>
	);
};
