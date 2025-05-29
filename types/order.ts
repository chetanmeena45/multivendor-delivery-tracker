export interface Order {
  id: string;
  customer: string;
  pickupAddress: string;
  deliveryAddress: string;
  date: string;
  amount: number;
  status: string;
  items: number;
  paymentMethod: string;
}