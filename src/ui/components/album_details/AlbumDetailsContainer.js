
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
            />
        )
    }


    actionForItem(key) {
        let {
            album
        } = this.props;
        let url = album[key];

        try {
            if (url && url.includes('http')) {
                this.openDisplayPage(key, url);
            }
            else {
                FlashAlert.show('Info', 'Nothing to display')
            }
        } catch (e) {
            FlashAlert.show('Info', 'Nothing to display')
        }
    }

    openDisplayPage(key, url) {

        let data = {
            [key]: url
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
