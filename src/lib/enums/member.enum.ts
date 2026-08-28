export const MemberStatus = {
  ACTIVE: "ACTIVE",
  BLOCK: "BLOCK",
  DELETE: "DELETE",
} as const;
export type MemberStatus = (typeof MemberStatus)[keyof typeof MemberStatus];

export const Gender = {
  MALE: "MALE",
  FEMALE: "FEMALE",
} as const;
export type Gender = (typeof Gender)[keyof typeof Gender];
