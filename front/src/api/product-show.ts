import axios from "axios";
import Cookies from "js-cookie";


export type ProductShowRequest = {
    number: string;
};

export type ProductShowResponse= {
    id: number;
    number: number;
    type: string;
    name: string;
    comments: string[];
    ingredients: string[];
    color: boolean;
    url: string;
    product10: {
        id: number;
        price: number;
    };
    product20: {
        id: number;
        price: number;
    };
    product30: {
        id: number;
        price: number;
    };
}

export function ProductShow(req: ProductShowRequest): Promise<{
    data: ProductShowResponse;
}> {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/product/show`;
    const authToken = Cookies.get("authToken");

    return axios
        .get<ProductShowResponse>(apiUrl, {
        params: req,
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
        })
        .then((res) => ({
            data: res.data,
        }));
}