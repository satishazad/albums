

const defaultHeaders = {
    'Content-Type': 'application/json'
}


const createHTTPHeaders = (extraHeaders) => {
    let headers = { };

    Object.assign(headers, defaultHeaders);
    if (extraHeaders) {
        Object.assign(headers, extraHeaders);
    }

    return headers;
}


export {
    createHTTPHeaders
}
