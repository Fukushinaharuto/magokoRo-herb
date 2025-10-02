import axios from "axios";
import Cookies from "js-cookie";


export type ProductIndexRequest = {
    id?: number;
};

export type ProductIndexResponse = {
    color: boolean;
    url: string;
    number: number;
    name: string;
    type: string;
    price: number;
};

export function ProductIndex(req: ProductIndexRequest): Promise<{
    data: ProductIndexResponse[];
}> {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/product`;
    const authToken = Cookies.get("authToken");

    return axios
        .get<ProductIndexResponse[]>(apiUrl, {
        params: req,
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
        })
        .then((res) => ({
            data: res.data,
        }));
}