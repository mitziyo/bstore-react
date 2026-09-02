export const MemberStatus = {
  ACTIVE: "ACTIVE",
  BLOCK: "BLOCK",
  DELETE: "DELETE",
} as const;
export type MemberStatus = (typeof MemberStatus)[keyof typeof MemberStatus];

export const MemberType = {
  USER: "USER",
  STORE: "STORE",
} as const;
export type MemberType = (typeof MemberType)[keyof typeof MemberType];
