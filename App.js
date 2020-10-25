/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import AppContainer from "./src/navigator/AppNavigator";
import {Provider} from "react-redux";
import store from "./src/store/Store";
import DBHelper from "./src/infrastructre/storage/database/db_helpers/DBHelper";
import NetworkConnectivity from "./src/infrastructre/connectivity/NetworkConnectivity";
import FlashMessage from "react-native-flash-message";



class App extends Component {

    constructor(props) {
        super(props);

        this.connection = new NetworkConnectivity();

        this.configureOnAppLaunch();
    }


    render() {
        return (
            <Provider store={store}>
                <AppContainer/>
                <FlashMessage position={"top"} />
            </Provider>
        )
    }


    configureOnAppLaunch() {

        //Database
        DBHelper.initialize();

        //Connection Status
        this.connection.initializeConnectivityListeners();
    }
}


export default App;
