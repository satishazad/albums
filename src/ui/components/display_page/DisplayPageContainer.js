
import React, { Component } from 'react';
import DisplayPageView from "./DisplayPageView";


class DisplayPageContainer extends Component {

    constructor(props) {
        super(props);

        let { route } = props;
        let res = route.params.data;

        this.data = {
            key: res.key,
            url: res.url
        }
    }



    render() {
        return(
            <DisplayPageView
                data={this.data}
            />
        )
    }

}


export default DisplayPageContainer;
