
import RestClient from "../api_core/RestClient";
import {HTTPMethod} from "../api_constants/HttpMethod";
import AlbumsListModel from "../../../core/models/AlbumsListModel";



class AlbumService {
    constructor() {
        this.rest = new RestClient();
    }


    async fetchItems(searchString) {
        let result = await this.rest.httpRequest({
            path: '',
            method: HTTPMethod.GET,
            queryParams: {
                term: searchString
            }
        });

        return new AlbumsListModel(result.data);
    }
}



export default AlbumService;
