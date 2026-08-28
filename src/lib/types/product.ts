import { BookFormat, BookGenre, BookStatus } from "../enums/product.enum";

export interface Product {
  _id: string;
  bookStatus: BookStatus;
  genres: BookGenre[];
  bookFormat: BookFormat;
  title: string;
  authorId: string;
  isbn?: string;
  publisher?: string;
  publishedDate?: Date;
  pageCount?: number;
  language?: string;
  price: number;
  originalPrice?: number;
  stockCount: number;
  description?: string;
  images: string[];
  averageRating: number;
  ratingsCount: number;
  viewCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductInquiry {
  page: number;
  limit: number;
  order: string;
  genre?: BookGenre;
  format?: BookFormat;
  search?: string;
}
