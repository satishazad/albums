
import React, { Component } from 'react';
import {
    View, StyleSheet, Text
} from 'react-native';
import {responsive} from "../responsive/Responsive";
import AppTheme from "../../theme/AppTheme";
import {ViewStyle} from "../../common_styles/ViewStyle";


class TextDescription extends Component {

    constructor(props) {
        super(props);

    }


    /**
     * Render View
     * */
    render() {

        let {
            title,
            description,
            titleStyle,
            descriptionStyle,
            viewStyle
        } = this.props;

        return(
            <View style={[styles.container, viewStyle]}>

                <View style={styles.contentView}>

                    <View style={styles.titleView}>
                        <Text style={[styles.title, titleStyle]}>
                            {title}
                        </Text>
                    </View>

                    <View style={styles.descriptionView}>
                        <Text style={[styles.description, descriptionStyle]}>
                            {description}
                        </Text>
                    </View>

                </View>

            </View>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        padding: responsive(8),
        backgroundColor: AppTheme.COLOR.BACKGROUND,
    },
    contentView: {
        padding: responsive(8),
        backgroundColor: AppTheme.COLOR.BACKGROUND,
        borderWidth: AppTheme.BORDER_WIDTH.DEFAULT,
        borderColor: AppTheme.COLOR.BORDER,
        borderRadius: AppTheme.BORDER_RADIUS.DEFAULT,

        ...ViewStyle.shadow
    },
    title: {
        fontSize: AppTheme.FONT_SIZE.MEDIUM_1,
        fontWeight: AppTheme.FONT_WEIGHT.BOLD
    },
    description: {
        fontSize: AppTheme.FONT_SIZE.MEDIUM_1,
        fontWeight: AppTheme.FONT_WEIGHT.NORMAL,
        marginTop: responsive(6)
    },
    titleView: {

    },
    descriptionView: {

    }
});


export default TextDescription;
