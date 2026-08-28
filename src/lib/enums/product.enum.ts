// Plain `enum` is disallowed here (tsconfig's `erasableSyntaxOnly`), so these use
// the `as const` object + derived union type pattern instead — same call-site
// ergonomics (`BookStatus.ACTIVE`), fully erasable at compile time.

export const BookStatus = {
  ACTIVE: "ACTIVE",
  DELETE: "DELETE",
} as const;
export type BookStatus = (typeof BookStatus)[keyof typeof BookStatus];

export const BookGenre = {
  FICTION: "FICTION",
  NON_FICTION: "NON_FICTION",
  BIOGRAPHY: "BIOGRAPHY",
  MYSTERY: "MYSTERY",
  THRILLER: "THRILLER",
  DRAMA: "DRAMA",
  ROMANCE: "ROMANCE",
  CHILDREN: "CHILDREN",
  COOKBOOK: "COOKBOOK",
  HISTORY: "HISTORY",
  SELF_HELP: "SELF_HELP",
  SCI_FI: "SCI_FI",
  UNCATEGORIZED: "UNCATEGORIZED",
} as const;
export type BookGenre = (typeof BookGenre)[keyof typeof BookGenre];

// String values match schema.org's BookFormatType vocabulary for interoperability.
export const BookFormat = {
  HARDCOVER: "Hardcover",
  PAPERBACK: "Paperback",
  EBOOK: "EBook",
  AUDIOBOOK: "AudiobookFormat",
} as const;
export type BookFormat = (typeof BookFormat)[keyof typeof BookFormat];
