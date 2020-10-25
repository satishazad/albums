
import React, { Component } from 'react';
import {
    View, StyleSheet, Text
} from 'react-native';
import {responsive} from "../responsive/Responsive";
import AppTheme from "../../theme/AppTheme";


class Label extends Component {

    constructor(props) {
        super(props);

    }


    /**
     * Render View
     * */
    render() {

        let {
            text,
            textStyle,
            viewStyle
        } = this.props;

        return(
            <View style={[styles.container, viewStyle]}>
                <Text style={[styles.text, textStyle]}>
                    {text}
                </Text>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        padding: responsive(2)
    },
    text: {
        fontSize: AppTheme.FONT_SIZE.MEDIUM
    }
});


export default Label;
