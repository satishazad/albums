
import {
    FETCH_ALBUMS_LIST_FAILURE, FETCH_ALBUMS_LIST_REQUEST, FETCH_ALBUMS_LIST_SUCCESS
} from "./AlbumsListActionTypes";


const initialState = {
    isProcessing: false,
    albumData: {
        albums: [],
        albumsCount: 0
    },  //Type of AlbumListModel
    error: null     //{ message: 'error-message' }
}



const albumsListReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_ALBUMS_LIST_REQUEST:
            return {
                ...state,
                isProcessing: true,
            }

        case FETCH_ALBUMS_LIST_SUCCESS:
            return {
                ...state,
                isProcessing: false,
                albumData: action.payload,
                error: null
            }

        case FETCH_ALBUMS_LIST_FAILURE:
            return {
                ...state,
                isProcessing: false,
                error: action.payload
            }

        default:
            return state;
    }
}


export default albumsListReducer;
