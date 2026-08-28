import { Gender, MemberStatus } from "../enums/member.enum";

export interface Member {
  _id: string;
  memberStatus: MemberStatus;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  dateOfBirth?: Date;
  gender?: Gender;
  avatarImage?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MemberInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface MemberUpdateInput {
  firstName?: string;
  lastName?: string;
  phone?: string;
  dateOfBirth?: Date;
  gender?: Gender;
  avatarImage?: string;
}

export interface PasswordUpdateInput {
  currentPassword: string;
  newPassword: string;
}
