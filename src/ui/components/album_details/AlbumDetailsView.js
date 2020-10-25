import React, {Component} from 'react';
import {
    View, StyleSheet, FlatList, TouchableOpacity
} from 'react-native'
import {ViewStyle} from "../../common_styles/ViewStyle";
import TextDescription from "../../utils/custom_component/TextDescription";
import {responsive} from "../../utils/responsive/Responsive";
import {Icon} from "../../icons/IconConstants";


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

                <View style={{ flex: 1 }}>
                    {Icon({ uri: album.artworkUrl100 }, {
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain'
                    })}
                </View>

                <View style={{ flex: 4 }}>
                    <FlatList
                        data={Object.keys(album)}
                        renderItem={({ item }) => this.renderItem(item)}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>

            </View>
        )
    }

    renderItem(item) {
        let {
            album
        } = this.props;

        let description = album[item];

        return(
            <TouchableOpacity
                onPress={() => {
                    this.props.onItemSelect(item);
                }}>
                <TextDescription
                    title={item.toUpperCase()}
                    description={description}
                />
            </TouchableOpacity>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        padding: responsive(4)
    }
})

export default AlbumDetailsView;
