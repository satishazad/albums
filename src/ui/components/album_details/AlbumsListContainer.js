
import React, { Component } from 'react';
import AlbumsListView from "./AlbumsListView";

class AlbumsListContainer extends Component {

    constructor(props) {
        super(props);

    }


    componentDidMount() {

    }

    componentWillUnmount() {

    }

    /**
     * Render View
     * */
    render() {
        return(
            <AlbumsListView />
        )
    }


    /**
     * Fetch Items for Search
     * */
    fetchItems(searchString) {
        // this.props.fetchStoreItemsList(searchString)
        //     .then(() => {
        //         this.onResultSuccess();
        //     }).catch((error) => {
        //        //FlashAlert.showError(error.message);
        // });
    }

    onResultSuccess() {
        // let { error } = this.props.dataModel;
        // if (error) {
        //     //FlashAlert.showError(error.message);
        // } else {
        //     //FlashAlert.showSuccess('Store items fetched successfully.');
        // }
    }
}


export default AlbumsListContainer;
