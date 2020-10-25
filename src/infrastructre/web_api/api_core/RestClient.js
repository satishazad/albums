import {createHTTPUrl} from "./RestUrlGenerator";
import {createHTTPHeaders} from "./HttpHeaderGenerator";
import {HTTPMethod} from "../api_constants/HttpMethod";
import {API_STATUS, HTTPStatus} from "../api_constants/HttpStatus";


class RestClient {

    constructor() {

    }

    logInfo(msg, log) {
        console.log('REST CLIENT ' + msg + ':: ', log);
    }

    async httpRequest(options) {
        let {
            path, method, body, queryParams, extraHeaders
        } = options;

        this.logInfo('REQUEST', options);

        //create url
        let url = createHTTPUrl(path, queryParams);

        //create headers
        let headers = createHTTPHeaders(extraHeaders);

        //Send Request
        let response = await fetch(
            url,
            {
                method: method,
                headers: headers,
                body: (method === HTTPMethod.POST || method === HTTPMethod.PUT) ? JSON.stringify(body) : null
            }
        );

        this.logInfo('RESPONSE', response);

        //Check http status
        let { status, statusString } = response;
        if (status === HTTPStatus.OK) {
            //Success
            let res = await response.json();
            this.logInfo('RESPONSE RESULT', res);
            return {
                status: API_STATUS.SUCCESS,
                message: 'Success',
                data: {
                    results: res.results,
                    resultCount: res.resultCount
                }
            }
        }

        //Failure
        return {
            status: API_STATUS.FAILED,
            message: 'Failed',
            data: null
        }

    }
}



export default RestClient;
