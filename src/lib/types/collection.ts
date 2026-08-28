import { CollectionVisibility } from "../enums/collection.enum";

export interface Collection {
  _id: string;
  memberId: string;
  title: string;
  description?: string;
  visibility: CollectionVisibility;
  productIds: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CollectionInput {
  title: string;
  description?: string;
  visibility: CollectionVisibility;
  productIds?: string[];
}
