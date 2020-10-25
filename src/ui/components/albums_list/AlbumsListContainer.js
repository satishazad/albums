
import React, { Component } from 'react';
import AlbumsListView from "./AlbumsListView";
import { connect } from 'react-redux';
import {
    fetchAlbumsList,
    setSelectedAlbumIndex
} from './AlbumsListActions';
import FlashAlert from "../../utils/alerts/FlashAlert";

const SEARCH_STRING = 'jack+johnson';


class AlbumsListContainer extends Component {

    constructor(props) {
        super(props);

    }


    componentDidMount() {
        this.fetchItems(SEARCH_STRING);
    }

    componentWillUnmount() {

    }

    /**
     * Render View
     * */
    render() {

        let {
            isProcessing,
            albumData
        } = this.props.dataModel;

        return(
            <AlbumsListView
                isProcessing={isProcessing}
                albumData={albumData}
            />
        )
    }


    /**x
     * Fetch Items for Search
     * */
    fetchItems(searchString) {
        this.props.fetchAlbumsList(searchString)
            .then(() => {
                this.onResultSuccess();
            }).catch((error) => {
               FlashAlert.showError(error.message);
        });
    }

    onResultSuccess() {
        let { error } = this.props.dataModel;
        if (error) {
            FlashAlert.showError(error.message);
        } else {
            FlashAlert.showSuccess('Album items fetched successfully.');
        }
    }
}


const mapStateToProps = (state) => {
    return {
        dataModel: state.albumsList
    }
}

const mapDispatchToProps = {
    fetchAlbumsList,
    setSelectedAlbumIndex
}


export default connect(mapStateToProps, mapDispatchToProps)(AlbumsListContainer);
