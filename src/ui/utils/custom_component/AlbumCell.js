
import React, { Component } from 'react';
import {
    View, StyleSheet
} from 'react-native'
import {Icon} from "../../icons/IconConstants";
import Label from "./Label";
import {responsive} from "../responsive/Responsive";
import AppTheme from "../../theme/AppTheme";
import {ViewStyle} from "../../common_styles/ViewStyle";


class AlbumCell extends Component {
    constructor(props) {
        super(props);

    }



    render() {

        let {
            item, size
        } = this.props;

        return(
            <View style={[styles.gridView, {
                height: responsive(size + 64),
                width: responsive(size),
            }]}>
                <View style={styles.contentView}>

                    <View style={styles.contentView1}>
                        {Icon({ uri: item.artworkUrl100 }, {
                            width: '100%',
                            height: '100%'
                        })}
                    </View>

                    <View style={styles.contentView2}>
                        <Label textStyle={styles.text} text={item.artistName}/>
                        <Label textStyle={styles.text} text={item.trackName}/>
                        <Label textStyle={styles.text} text={item.collectionName}/>
                    </View>

                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    gridView: {
        padding: responsive(6)
    },
    contentView: {
        flex: 1,
        backgroundColor: AppTheme.COLOR.BACKGROUND,
        borderWidth: AppTheme.BORDER_WIDTH.DEFAULT,
        borderColor: AppTheme.COLOR.BORDER,
        borderRadius: AppTheme.BORDER_RADIUS.DEFAULT,

        ...ViewStyle.shadow
    },
    contentView1: {
        flex: 2,
        //backgroundColor: 'red',
    },
    contentView2: {
        flex: 1,
        //backgroundColor: 'green',
        padding: responsive(4)
    },
    text: {
        fontSize: AppTheme.FONT_SIZE.SMALL_2
    }
})

export default AlbumCell;
