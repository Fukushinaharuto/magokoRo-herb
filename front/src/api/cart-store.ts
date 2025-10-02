import axios from "axios";
import Cookies from "js-cookie";

export type CartStoreRequest = {
    id: number;
    quantity: number;
};

export type CartStoreResponse = {
    success: true;
    messages: string;
};

export type CartStoreValidationResponse = {
    success: false;
    errors: Record<string, string[]>;
};

export function CartStore(
    req: CartStoreRequest
    ): Promise<CartStoreResponse | CartStoreValidationResponse> {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/cart`;
    const authToken = Cookies.get("authToken");

    return axios.post<CartStoreResponse | CartStoreValidationResponse>(
        apiUrl,
        req,
        {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        }
    )
    .then((res) => {
        return res.data;
    })
    .catch((error) => {
        return error.response.data;
    });
}
