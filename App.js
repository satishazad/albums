/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import AppContainer from "./src/navigator/AppNavigator";

class App extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <AppContainer/>
        )
    }
}


export default App;
