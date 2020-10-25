
import NetInfo from '@react-native-community/netinfo';
import EventRegister from 'react-native-event-listeners';

class NetworkConnectivity {

    constructor() {

    }


    initializeConnectivityListeners() {
        this.unsubscribe = NetInfo.addEventListener(state => {
           this._handleConnectivityChange(state.isConnected);
        });
    }


    _handleConnectivityChange = (isConnected) => {
        //EventRegister.emit('ConnectionStatus', { isConnected: isConnected });

        if (isConnected) {
            console.log('CONNECTED TO INTERNET');
        } else {
            console.log('DISCONNECTED FROM INTERNET');
        }
    }


    static isConnected = async () => {
        let state = await NetInfo.fetch();
        return state.isConnected;
    }
}


export default NetworkConnectivity;
