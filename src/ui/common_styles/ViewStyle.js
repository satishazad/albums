
import {
    StyleSheet
} from 'react-native';
import AppTheme from "../theme/AppTheme";


const ViewStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: AppTheme.COLOR.BACKGROUND
    },
    shadow: {
        elevation: 8,
        shadowColor: '#000000',
        shadowOffset: {
            width: 4,
            height: 4
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    }
});



export {
    ViewStyle
}
