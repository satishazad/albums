
import React, { Component } from 'react';
import {
    View, StyleSheet
} from 'react-native';
import {ViewStyle} from "../../common_styles/ViewStyle";

class AlbumsListView extends Component {

    constructor(props) {
        super(props);

    }


    componentDidMount() {

    }

    componentWillUnmount() {

    }

    /**
     * Render View
     * */
    render() {
        return(
            <View style={[ViewStyle.container, styles.container]}>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {

    }
})


export default AlbumsListView;
