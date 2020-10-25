import {FETCH_ALBUMS_LIST_FAILURE, FETCH_ALBUMS_LIST_REQUEST, FETCH_ALBUMS_LIST_SUCCESS} from "./AlbumsListActionTypes";
import AlbumService from "../../../infrastructre/web_api/api_services/AlbumService";
import SyncAlbums from "../../../infrastructre/sync/SyncAlbums";


const fetchAlbumsListRequest = () => {
    return {
        type: FETCH_ALBUMS_LIST_REQUEST
    }
}


const fetchAlbumsListSuccess = (res) => {
    return {
        type: FETCH_ALBUMS_LIST_SUCCESS,
        payload: res
    }
}


const fetchAlbumsListFailure = (error) => {
    return {
        type: FETCH_ALBUMS_LIST_FAILURE,
        payload: error
    }
}


export const fetchAlbumsList = (searchString) => {
    return async dispatch => {
        dispatch(fetchAlbumsListRequest());
        try {

            let service = new AlbumService();
            let res = await service.fetchItems(searchString);

            let sync = new SyncAlbums();
            await sync.startSync(searchString);

            dispatch(fetchAlbumsListSuccess(res));

        } catch (e) {
            dispatch(fetchAlbumsListFailure(e));
        }
    }
}



