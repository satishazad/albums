import AlbumService from "../web_api/api_services/AlbumService";
import AlbumRepository from "../storage/database/repository/AlbumRepository";


class SyncAlbums {

    constructor() {

    }


    async startSync(searchString) {

        let service = new AlbumService();
        let res = await service.fetchItems(searchString);

        let repo = new AlbumRepository();
        repo.create(res.albums);

    }


}


export default SyncAlbums;
