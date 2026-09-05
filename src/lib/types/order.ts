import { OrderStatus } from "../enums/order.enum";
import type { Product } from "./product";

export interface OrderItemInput {
  bookId: string;
  itemQuantity: number;
  itemPrice: number;
  orderId?: string;
}

export interface OrderItem {
  _id: string;
  bookId: string;
  itemQuantity: number;
  itemPrice: number;
  orderId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  _id: string;
  memberId: string;
  orderStatus: OrderStatus;
  orderTotal: number;
  orderDelivery: number;
  createdAt: Date;
  updatedAt: Date;
  /** from aggregations **/
  orderItems: OrderItem[];
  bookData: Product[];
}

export interface OrderInquiry {
  page: number;
  limit: number;
  orderStatus?: OrderStatus;
}

export interface OrderUpdateInput {
  orderId: string;
  orderStatus: OrderStatus;
}
