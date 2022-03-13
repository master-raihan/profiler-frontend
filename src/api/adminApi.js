import { sendRequest } from "./rootApi";

export const loginApi = async (request) => {
    const url = 'http://localhost:8000/admin/api/v1/login';

    return sendRequest(
        "POST",
        url,
        request
    );
}