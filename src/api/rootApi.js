import axios from "axios";
import { getCookie } from "../helpers/Cookie";

export const sendRequest = (method, url, payload = []) => {
    return axios.request({
        method,
        url,
        data: payload,
    });
};

export const sendRequestWithToken = (method, url, payload = []) => {
    // For Cancel Token
    let cancelToken;

    if (typeof cancelToken !== typeof undefined) {
        cancelToken.cancel("Canceling the previous token.");
    }

    cancelToken = axios.CancelToken.source();

    const bearerToken = getCookie(process.env.REACT_APP_ACCESS_TOKEN);

    return axios.request({
        method,
        url,
        data: payload,
        headers: {
            Authorization: `Bearer ${bearerToken}`,
        },
        cancelToken: cancelToken.token,
    });
};
