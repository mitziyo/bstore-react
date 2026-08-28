export const AddressType = {
  HOME: "HOME",
  OFFICE: "OFFICE",
} as const;
export type AddressType = (typeof AddressType)[keyof typeof AddressType];
