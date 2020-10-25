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



class App extends Component {

    constructor(props) {
        super(props);

        this.configureOnAppLaunch();
    }


    render() {
        return (
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        )
    }


    configureOnAppLaunch() {

        //Database
        DBHelper.initialize();

    }
}


export default App;
