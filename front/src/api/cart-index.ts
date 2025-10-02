import axios from "axios";
import Cookies from "js-cookie";

export type CartItem = {
    id: number;
    color: boolean;
    url: string;
    number: number;
    name: string;
    type: string;
    price: number;
    amount: number;
    quantity: number;
  };
  
  export type CartIndexResponse = {
    carts: CartItem[];
    total_price: number;
  };
  
  export function CartIndex(): Promise<CartIndexResponse> {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/cart`;
    const authToken = Cookies.get("authToken");
  
    return axios
      .get<CartIndexResponse>(apiUrl, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((res) => res.data);
  }
  