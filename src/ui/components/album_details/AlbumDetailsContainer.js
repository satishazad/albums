
import React, { Component } from 'react';
import AlbumDetailsView from "./AlbumDetailsView";
import { connect } from 'react-redux';
import {ROUTE} from "../../../navigator/Route";
import FlashAlert from "../../utils/alerts/FlashAlert";


class AlbumDetailsContainer extends Component {

    constructor(props) {
        super(props);

    }


    componentDidMount() {

    }

    componentWillUnmount() {

    }


    render() {

        let {
            album
        } = this.props;

        return(
            <AlbumDetailsView
                album={album}
                onItemSelect={(key) => {
                    this.actionForItem(key);
                }}
                onPlay={() => {
                    this.onPlayAlbum();
                }}
            />
        )
    }


    onPlayAlbum() {
        let {
            album
        } = this.props;

        let { previewUrl } = album;

        this.openDisplayPage('previewUrl', previewUrl);
    }

    actionForItem(key) {
        let {
            album
        } = this.props;
        let data = album[key];

        try {
            if (data && data.includes('http')) {
                this.openDisplayPage(key, data);
            }
            else {
                FlashAlert.showSuccess(data, key.toUpperCase())
            }
        } catch (e) {
            FlashAlert.showSuccess('Nothing to display', key.toUpperCase())
        }
    }

    openDisplayPage(key, url) {

        let data = {
            key: key,
            url: url
        };

        this.props.navigation.navigate(ROUTE.DISPLAY_PAGE, { data })
    }
}

const mapStateToProps = (state) => {
    let list = state.albumsList.albumData.albums;
    let index = state.albumsList.selectedAlbumIndex;

    return {
        album: list[index]
    }
}


const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetailsContainer);
