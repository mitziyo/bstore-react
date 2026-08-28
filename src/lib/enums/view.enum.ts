export const ViewGroup = {
  PRODUCT: "PRODUCT",
  AUTHOR: "AUTHOR",
} as const;
export type ViewGroup = (typeof ViewGroup)[keyof typeof ViewGroup];
