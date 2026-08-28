export interface Review {
  _id: string;
  productId: string;
  memberId: string;
  orderId?: string;
  rating: number;
  text: string;
  images?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ReviewInput {
  productId: string;
  orderId?: string;
  rating: number;
  text: string;
  images?: string[];
}

export interface ReviewInquiry {
  productId: string;
  page: number;
  limit: number;
}
