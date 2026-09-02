import { api } from "../../lib/config";
import type { Product, ProductInquiry } from "../../lib/types/product";
import { BookFormat } from "../../lib/enums/product.enum";

const FORMAT_MAP: Record<string, BookFormat> = {
  PAPERBACK: BookFormat.PAPERBACK,
  HARDCOVER: BookFormat.HARDCOVER,
  EBOOK: BookFormat.EBOOK,
};

function toProduct(raw: Product): Product {
  return {
    ...raw,
    bookFormat: FORMAT_MAP[raw.bookFormat as unknown as string] ?? BookFormat.PAPERBACK,
  };
}

class BookService {
  public async getBooks(input: ProductInquiry): Promise<Product[]> {
    try {
      let url = `/book/all?order=${input.order}&page=${input.page}&limit=${input.limit}`;
      if (input.genre) url += `&bookGenre=${input.genre}`;
      if (input.search) url += `&search=${input.search}`;

      const result = await api.get<Product[]>(url);
      return result.data.map(toProduct);
    } catch (err) {
      console.log("Error, getBooks:", err);
      throw err;
    }
  }

  public async getBook(bookId: string): Promise<Product> {
    try {
      const result = await api.get<Product>(`/book/${bookId}`);
      return toProduct(result.data);
    } catch (err) {
      console.log("Error, getBook:", err);
      throw err;
    }
  }
}

export default BookService;
