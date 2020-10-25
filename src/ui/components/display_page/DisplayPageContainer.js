
import React, { Component } from 'react';
import DisplayPageView from "./DisplayPageView";


class DisplayPageContainer extends Component {

    constructor(props) {
        super(props);

        let { route } = props;
        this.data = route.params.data;
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
