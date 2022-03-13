const timeToMiliSecond = (time) => {
    const number = time.substring(0, time.indexOf(" "));
    switch (time.substr(time.indexOf(" ") + 1)) {
        case "day":
            return number * 24 * 60 * 60 * 1000;
        case "hour":
            return number * 60 * 60 * 1000;
        case "minute":
            return number * 60 * 1000;
        case "second":
            return number * 1000;
        default:
            return number * 60 * 1000;
    }
};

export const setCookie = (cname, cvalue, exTime) => {
    const date = new Date();
    date.setTime(date.getTime() + timeToMiliSecond(exTime));

    document.cookie = `${cname}=${cvalue}; expires = ${date.toGMTString()};path=/`;
    // document.cookie = cname + "=" + cvalue + "; Secure; path=/";
};

export const setOtherCookie = (cname, cvalue) => {
    document.cookie = `${cname}=${cvalue}`;
};

export const setCookieForRefresh = (cname, cvalue) => {
    document.cookie = `${cname}=${cvalue}; Secure; path=/`;
};

export const getCookie = (cname) => {
    const name = `${cname}=`;
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i += 1) {
        let c = ca[i];
        while (c.charAt(0) === " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};

const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
        return null;
    }
};

export const checkCookie = (cname) => {
    const cookieInfo = getCookie(cname);

    if (cookieInfo === "") {
        return "";
    }
    const decodedJwt = parseJwt(cookieInfo);
    if (decodedJwt.exp * 1000 < Date.now()) {
        return "";
    }
    return !!cookieInfo;
};
