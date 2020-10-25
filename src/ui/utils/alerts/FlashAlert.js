
import React from 'react';
import { showMessage } from "react-native-flash-message";


class FlashAlert {

    static show(title, message) {
        showMessage({
            message: title,
            description: message,
            autoHide: true,
            type: "default"
        });
    }


    static showError(message, title = 'ERROR') {
        showMessage({
            message: title,
            description: message,
            autoHide: true,
            type: "danger"
        });
    }


    static showSuccess(message, title = 'SUCCESS') {
        showMessage({
            message: title,
            description: message,
            autoHide: true,
            type: "success"
        });
    }

}



export default FlashAlert;
