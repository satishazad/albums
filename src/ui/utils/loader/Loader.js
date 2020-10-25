
import React, { Component } from 'react';
import {
    View
} from 'react-native';
import Spinner from "react-native-loading-spinner-overlay";


class Loader extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        let {
            visible,
            text
        } = this.props;

        text = (text) ? text : 'Loading...';

        return(
            <View>
                <Spinner
                    visible={visible}
                    textContent={text}
                    textStyle={{
                        color: '#000000'
                    }}
                />
            </View>
        )
    }

}

export default Loader;
