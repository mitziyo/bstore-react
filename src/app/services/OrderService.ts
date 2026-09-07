import { api } from "../../lib/config";
import type { CartItem } from "../../lib/types/search";
import type { Order, OrderInquiry, OrderItemInput, OrderUpdateInput } from "../../lib/types/order";
import { toProduct } from "./BookService";

class OrderService {
  public async createOrder(input: CartItem[]): Promise<Order> {
    try {
      const orderItems: OrderItemInput[] = input.map((cartItem) => ({
        bookId: cartItem._id,
        itemQuantity: cartItem.quantity,
        itemPrice: cartItem.price,
      }));

      const result = await api.post<Order>("/order/create", orderItems);
      return result.data;
    } catch (err) {
      console.log("Error, createOrder:", err);
      throw err;
    }
  }

  public async getMyOrders(input: OrderInquiry): Promise<Order[]> {
    try {
      let url = `/order/all?page=${input.page}&limit=${input.limit}`;
      if (input.orderStatus) url += `&orderStatus=${input.orderStatus}`;

      const result = await api.get<Order[]>(url);
      return result.data.map((order) => ({ ...order, bookData: order.bookData.map(toProduct) }));
    } catch (err) {
      console.log("Error, getMyOrders:", err);
      throw err;
    }
  }

  public async updateOrder(input: OrderUpdateInput): Promise<Order> {
    try {
      const result = await api.post<Order>("/order/update", input);
      return result.data;
    } catch (err) {
      console.log("Error, updateOrder:", err);
      throw err;
    }
  }
}

export default OrderService;
