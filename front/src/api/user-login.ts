import axios from "axios";

export type UesrLoginRequest = {
    email: string;
    password: string;
};

export type UserLoginResponse = {
    success: true;
    authToken: string;
};

export type UserLoginValidationResponse = {
    success: false;
    type: "validation"
    errors: Record<string, string[]>;
};

export type UserLoginEmailErrorResponse = {
    success: false;
    type: "email";
    messages: string[];
};
export type UserLoginPasswordErrorResponse = {
    success: false;
    type: "password";
    messages: string[];
};




export function UserLogin(
    req: UesrLoginRequest
    ): Promise<UserLoginResponse | UserLoginEmailErrorResponse | UserLoginPasswordErrorResponse | UserLoginValidationResponse> {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/user/login`;

    return axios.post<UserLoginResponse | UserLoginEmailErrorResponse | UserLoginPasswordErrorResponse | UserLoginValidationResponse>(apiUrl, req)
    .then((res) => {
        return res.data;
    })
    .catch((error) => {
        return error.response.data;
    });
}
