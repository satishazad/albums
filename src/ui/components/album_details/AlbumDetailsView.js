import React, {Component} from 'react';
import {
    View, StyleSheet
} from 'react-native'
import {ViewStyle} from "../../common_styles/ViewStyle";
import Label from "../../utils/custom_component/Label";


class AlbumDetailsView extends Component {

    constructor(props) {
        super(props);

    }


    componentDidMount() {

    }

    componentWillUnmount() {

    }


    render() {

        let {
            album
        } = this.props;

        return (
            <View style={[ViewStyle.container, styles.container]}>

                <Label text={JSON.stringify(album)}/>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {}
})

export default AlbumDetailsView;
