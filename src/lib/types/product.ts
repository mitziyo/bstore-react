import { BookFormat, BookGenre, BookStatus } from "../enums/product.enum";

export interface Product {
  _id: string;
  bookStatus: BookStatus;
  bookGenre: BookGenre;
  bookFormat: BookFormat;
  bookName: string;
  bookPrice: number;
  bookLeftCount: number;
  bookDesc?: string;
  bookImages: string[];
  bookViews: number;
  createdAt: Date;
  updatedAt: Date;
  // Backend hali qo'llab-quvvatlamaydi (Author/Review funksiyasi qurilganda to'ldiriladi):
  authorId?: string;
  isbn?: string;
  publisher?: string;
  publishedDate?: Date;
  pageCount?: number;
  language?: string;
  originalPrice?: number;
  averageRating?: number;
  ratingsCount?: number;
}

export interface ProductInquiry {
  page: number;
  limit: number;
  order: string;
  genre?: BookGenre;
  format?: BookFormat;
  search?: string;
  priceMin?: number;
  priceMax?: number;
}
