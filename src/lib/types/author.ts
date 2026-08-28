import { BookGenre } from "../enums/product.enum";

export interface AuthorSocialLinks {
  facebook?: string;
  twitter?: string;
  googlePlus?: string;
  pinterest?: string;
}

export interface Author {
  _id: string;
  firstName: string;
  lastName: string;
  bio?: string;
  avatarImage?: string;
  position?: string;
  birthYear?: number;
  genres: BookGenre[];
  languages: string[];
  socialLinks?: AuthorSocialLinks;
  copiesSold: number;
  bookCount: number;
  awardCount: number;
  followerCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthorInquiry {
  page: number;
  limit: number;
  letter?: string;
  genre?: BookGenre;
  search?: string;
}
