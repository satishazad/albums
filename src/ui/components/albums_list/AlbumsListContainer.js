
import React, { Component } from 'react';
import AlbumsListView from "./AlbumsListView";
import { connect } from 'react-redux';
import {
    fetchAlbumsList
} from './AlbumsListActions';


class AlbumsListContainer extends Component {

    constructor(props) {
        super(props);

    }


    componentDidMount() {
        this.props.fetchAlbumsList();
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


const mapStateToProps = (state) => {
    return {
        dataModel: state.albumsList
    }
}

const mapDispatchToProps = {
    fetchAlbumsList
}


export default connect(mapStateToProps, mapDispatchToProps)(AlbumsListContainer);
