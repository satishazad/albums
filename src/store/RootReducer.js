import {
    combineReducers
} from "redux";
import albumsListReducer from "../ui/components/albums_list/AlbumsListReducer";


const rootReducer = combineReducers({
    albumsList: albumsListReducer

});


export default rootReducer;
