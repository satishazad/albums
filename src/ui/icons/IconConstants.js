
import React from 'react';
import {
    View, Image
} from 'react-native';
import {responsive} from "../utils/responsive/Responsive";


export const Icon = (source, style) => {
    return (
        <View>
            <Image
                style={[{
                    width: responsive(60),
                    height: responsive(60),
                    //resizeMode: 'contain'
                }, style]}
                source={source}
            />
        </View>
    )
}


