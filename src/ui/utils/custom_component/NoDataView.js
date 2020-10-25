
import React, { Component } from 'react';
import {
    View, StyleSheet
} from 'react-native';
import Label from "./Label";
import AppTheme from "../../theme/AppTheme";


class NoDataView extends Component {

    constructor(props) {
        super(props);

    }



    render() {
        return(
            <View style={style.container}>
                <Label
                    textStyle={{
                        fontSize: AppTheme.FONT_SIZE.LARGE,
                        fontWeight: AppTheme.FONT_WEIGHT.BOLD
                    }}
                    text={'No Records Available'}/>
            </View>
        )
    }

}


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default NoDataView;
