import axios from "axios";

export type UesrRegisterRequest = {
    name: string;
    email: string;
    password: string;
    telephoneNumber: string;
    postCode1: string;
    postCode2: string;
    prefectures: string;
    municipalities: string;
    streetAddress: string;
};

export type UserRegisterResponse = {
    success: true;
    authToken: string;
};

export type UserRegisterValidationResponse = {
    success: false;
    type: "validation"
    errors: Record<string, string[]>;
};

export type UserRegisterEmailErrorResponse = {
    success: false;
    type: "email";
    messages: string[];
};

export function UserRegister(
    req: UesrRegisterRequest
    ): Promise<UserRegisterResponse | UserRegisterEmailErrorResponse  | UserRegisterValidationResponse> {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/user/register`;

    return axios.post<UserRegisterResponse | UserRegisterEmailErrorResponse | UserRegisterValidationResponse>(apiUrl, req)
    .then((res) => {
        return res.data;
    })
    .catch((error) => {
        return error.response.data;
    });
}
