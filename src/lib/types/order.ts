import { OrderStatus, PaymentMethod } from "../enums/order.enum";
import type { Product } from "./product";

export interface OrderItemInput {
  productId: string;
  itemQuantity: number;
  itemPrice: number;
  orderId?: string;
}

export interface OrderItem {
  _id: string;
  productId: string;
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
  paymentMethod: PaymentMethod;
  shippingAddressId?: string;
  subtotal: number;
  shippingFee: number;
  discount: number;
  orderTotal: number;
  createdAt: Date;
  updatedAt: Date;
  /** from aggregations **/
  orderItems: OrderItem[];
  productData: Product[];
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
