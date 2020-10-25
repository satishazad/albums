
import React, { Component } from 'react';
import AlbumDetailsView from "./AlbumDetailsView";
import { connect } from 'react-redux';


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
            />
        )
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
