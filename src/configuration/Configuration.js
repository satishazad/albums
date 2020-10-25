
const env = require('./env.json');

class Configuration {

    constructor() {
        this.environment = env.DEV;
    }


    getBaseUrl() {
        return this.environment.BaseURL;
    }


    isDebug() {
        return __DEV__;
    }
}



export default Configuration;
