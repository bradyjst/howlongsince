import { useState } from "react";
import "./EventReactions.css";
import { supabase } from "../../lib/supabase";

type ReactionKey = "interesting" | "surprising" | "sad";

const REACTIONS: { key: ReactionKey; label: string; emoji: string }[] = [
	{ key: "interesting", label: "Interesting", emoji: "👍" },
	{ key: "surprising", label: "Surprising", emoji: "😮" },
	{ key: "sad", label: "Sad", emoji: "😢" },
];

type Props = {
	eventId: string;
	reactions: Record<string, number>;
};

export function EventReactions({ eventId, reactions }: Props) {
	const [local, setLocal] = useState(reactions);
	const [loading, setLoading] = useState(false);
	const [clicked, setClicked] = useState<Record<string, boolean>>({});

	async function react(key: ReactionKey) {
		if (loading || clicked[key]) return;

		setClicked((prev) => ({ ...prev, [key]: true }));
		setLoading(true);

		const next = {
			...local,
			[key]: (local[key] ?? 0) + 1,
		};

		setLocal(next);

		await supabase.from("events").update({ reactions: next }).eq("id", eventId);

		setLoading(false);
	}

	return (
		<div className="event-reactions">
			{REACTIONS.map((r) => (
				<button
					key={r.key}
					onClick={() => react(r.key)}
					disabled={loading || clicked[r.key]}
				>
					{r.emoji} {r.label} ({local[r.key] ?? 0})
				</button>
			))}
		</div>
	);
}
