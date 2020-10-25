
import NetInfo from '@react-native-community/netinfo';

class NetworkConnectivity {

    constructor() {

    }


    initializeConnectivityListeners() {
        // this.unsubscribe = NetInfo.addEventListener(state => {
        //    this._handleConnectivityChange(state.isConnected);
        // });
    }


    // _handleConnectivityChange = (isConnected) => {
    //     if (isConnected) {
    //         console.log('CONNECTED TO INTERNET');
    //     } else {
    //         console.log('DISCONNECTED FROM INTERNET');
    //     }
    // }


    static isConnected = async () => {
        let state = await NetInfo.fetch();
        return state.isConnected;
    }
}


export default NetworkConnectivity;
