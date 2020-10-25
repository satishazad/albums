import Configuration from "../../../configuration/Configuration";

const createHTTPUrl = (path, queryParams) => {
    let config = new Configuration();
    let baseUrl = config.getBaseUrl();

    //Append if any endpoint.
    if (path && path.length > 0) {
        baseUrl = baseUrl + '/' + path;
    }

    let urlPath = baseUrl;

    //create query string and append into the urlPath
    if (queryParams) {
        let esc = encodeURIComponent;
        let keys = Object.keys(queryParams);
        let query = keys.map(el => esc(el) + '=' + esc(queryParams[el]));
        let queryStr = query.join('&');
        if (queryStr && queryStr.length > 0) {
            urlPath = urlPath + '?' + queryStr;
        }
    }

    return urlPath;
}



export  {
    createHTTPUrl
}
