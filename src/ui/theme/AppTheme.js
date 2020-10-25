import {responsive} from "../utils/responsive/Responsive";

const AppTheme = {

    COLOR: {
        BACKGROUND: '#ffffff',

        BORDER: '#000000'
    },


    TEXT_COLOR: {
        PRIMARY: '#000000'

    },


    FONT_SIZE: {
        SMALL: responsive(4),
        SMALL_1: responsive(8),
        SMALL_2: responsive(10),

        MEDIUM: responsive(12),
        MEDIUM_1: responsive(14),
        MEDIUM_2: responsive(18),

        LARGE: responsive(20),
        LARGE_1: responsive(22),
        LARGE_2: responsive(24),

        HEADING: responsive(28),
        HEADING_1: responsive(32),
        HEADING_2: responsive(34),
    },

    FONT_WEIGHT: {
        NORMAL: 'normal',
        BOLD: 'bold'
    }
}


export default AppTheme;
