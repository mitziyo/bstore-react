import { AddressType } from "../enums/address.enum";

export interface Address {
  _id: string;
  memberId: string;
  type: AddressType;
  isDefault: boolean;
  fullName: string;
  phone: string;
  alternatePhone?: string;
  country: string;
  city: string;
  area?: string;
  zipCode?: string;
  addressLine: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AddressInput {
  type: AddressType;
  isDefault?: boolean;
  fullName: string;
  phone: string;
  alternatePhone?: string;
  country: string;
  city: string;
  area?: string;
  zipCode?: string;
  addressLine: string;
}
