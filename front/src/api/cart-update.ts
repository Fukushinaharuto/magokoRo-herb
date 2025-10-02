import axios from "axios";
import Cookies from "js-cookie";

export type CartUpdateRequest = {
    id: number;
    mode: string;
    quantity?: number;
};

export type CartUpdateResponse = {
    quantity: number;
};

export function CartUpdate(
    req: CartUpdateRequest
    ): Promise<CartUpdateResponse> {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/cart`;
    const authToken = Cookies.get("authToken");

    return axios.patch<CartUpdateResponse>(
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
