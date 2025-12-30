export type EventCategory =
  | "war"
  | "politics"
  | "presidency"
  | "technology"
  | "movies"
  | "culture"
  | "disaster"
  | "science";

export type EventSource = {
  label: string;
  url: string;
};

export type Event = {
  id: string;                 // stable slug (used in URLs)
  title: string;              // SEO title
  occurredAt: string;         // ISO 8601 timestamp
  category: EventCategory;
  summary: string;            // short neutral description
  sources: EventSource[];     // citations
  tags?: string[];            // optional SEO helpers
  featured?: boolean;         // homepage highlighting
};
