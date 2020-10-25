import React, {Component} from 'react';
import {
    View, StyleSheet, FlatList, TouchableOpacity
} from 'react-native'
import {ViewStyle} from "../../common_styles/ViewStyle";
import TextDescription from "../../utils/custom_component/TextDescription";
import {responsive} from "../../utils/responsive/Responsive";
import {Icon} from "../../icons/IconConstants";
import Label from "../../utils/custom_component/Label";
import AppTheme from "../../theme/AppTheme";


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
            album, onPlay
        } = this.props;

        return (
            <View style={[ViewStyle.container, styles.container]}>

                <View style={{ flex: 1}}>
                    {Icon({ uri: album.artworkUrl100 }, {
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain'
                    })}
                    <View style={{
                        position: 'absolute',
                        right: 4
                    }}>
                        <TouchableOpacity
                            onPress={() => {
                                onPlay();
                            }}>
                            <Label
                                textStyle={{
                                    fontSize: AppTheme.FONT_SIZE.MEDIUM_2,
                                    fontWeight: AppTheme.FONT_WEIGHT.BOLD
                                }}
                                viewStyle={{
                                    borderWidth: AppTheme.BORDER_WIDTH.DEFAULT,
                                    borderRadius: AppTheme.BORDER_RADIUS.DEFAULT,
                                    padding: responsive(10)
                                }}
                                text={'PLAY'}/>
                        </TouchableOpacity>
                    </View>
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
