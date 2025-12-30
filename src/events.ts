import type { Event } from "./types";

export const events: Event[] = [
  {
    id: "world-war-2-ended",
    title: "World War II ended",
    occurredAt: "1945-09-02T09:00:00Z",
    category: "war",
    summary:
      "World War II officially ended on September 2, 1945, when Japan formally surrendered aboard the USS Missouri in Tokyo Bay, bringing the deadliest conflict in human history to a close.",
    sources: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/World_War_II",
      },
    ],
    tags: [
      "world war ii",
      "ww2",
      "japan surrender",
      "tokyo bay",
      "1945",
    ],
    featured: true,
  },
];
