
import React, { Component } from 'react';
import {
    View, StyleSheet
} from 'react-native';
import {ViewStyle} from "../../common_styles/ViewStyle";
import Loader from "../../utils/loader/Loader";

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

        let {
            isProcessing
        } = this.props;

        return(
            <View style={[ViewStyle.container, styles.container]}>


                <Loader visible={isProcessing}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {

    }
})


export default AlbumsListView;
