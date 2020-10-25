
import React, { Component } from 'react';
import {
    View, StyleSheet
} from 'react-native';
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
            <View style={styles.container}>
                <Label
                    text={JSON.stringify(data)}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {

    }
})

export default DisplayPageView;
