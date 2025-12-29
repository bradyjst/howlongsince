import "./TextBlock.css";
import type { ReactNode } from "react";

type TextBlockProps = {
	children: ReactNode;
};

export const TextBlock = ({ children }: TextBlockProps) => {
	return (
		<section className="text-block2">
			<div className="text-block-container2">{children}</div>
		</section>
	);
};
