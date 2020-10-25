
import React, { Component } from 'react';
import {
    View, StyleSheet, Dimensions, TouchableOpacity
} from 'react-native';
import { FlatGrid} from "react-native-super-grid";
import {ViewStyle} from "../../common_styles/ViewStyle";
import Loader from "../../utils/loader/Loader";
import AlbumCell from "../../utils/custom_component/AlbumCell";

const { width, height } = Dimensions.get('window');

const SIZE = width - (width * 2 / 3 ) + 38;

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
            isProcessing, albumData
        } = this.props;

        let {
            albums, albumsCount
        } = albumData;

        return(
            <View style={[ViewStyle.container, styles.container]}>
                <FlatGrid
                    itemDimension={SIZE}
                    data={albums}
                    renderItem={(data) => this.renderItem(data)}
                />
                <Loader visible={isProcessing}/>
            </View>
        )
    }


    renderItem(data) {

        let {
            item, index
        } = data;

        return(
            <TouchableOpacity
                onPress={() => {
                    let { onAlbumPress } = this.props;
                    if (onAlbumPress) { onAlbumPress(index) }
                }}>
                <AlbumCell item={item} size={SIZE}/>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    container: {

    },

})


export default AlbumsListView;
