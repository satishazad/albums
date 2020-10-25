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



class App extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        )
    }
}


export default App;
