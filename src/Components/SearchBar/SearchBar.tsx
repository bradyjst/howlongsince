import { useState } from "react";
import "./SearchBar.css";

type SearchBarProps = {
	placeholder?: string;
	onSearch: (query: string) => void;
};

export default function SearchBar({
	placeholder = "Search events...",
	onSearch,
}: SearchBarProps) {
	const [value, setValue] = useState("");

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const next = e.target.value;
		setValue(next);
		onSearch(next.trim());
	}

	return (
		<div className="search-bar">
			<input
				type="search"
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
				aria-label="Search events"
			/>
		</div>
	);
}
