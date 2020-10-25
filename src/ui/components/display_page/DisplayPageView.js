
import React, { Component } from 'react';
import {
    View, StyleSheet
} from 'react-native';
import { WebView } from 'react-native-webview';
import Label from "../../utils/custom_component/Label";


class DisplayPageView extends Component {

    constructor(props) {
        super(props);

    }



    render() {

        let {
            data
        } = this.props;

        return(
            // <View style={styles.container}>
                <WebView
                    style={styles.web}
                    source={{ uri: data.url }}
                />
            // </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {

    },
    web: {
        flex: 1
    }
})

export default DisplayPageView;
