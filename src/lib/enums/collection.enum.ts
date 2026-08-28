export const CollectionVisibility = {
  PUBLIC: "PUBLIC",
  PRIVATE: "PRIVATE",
} as const;
export type CollectionVisibility = (typeof CollectionVisibility)[keyof typeof CollectionVisibility];
