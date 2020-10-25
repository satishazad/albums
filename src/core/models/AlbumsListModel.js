
import JSModel from "react-native-jsmodel";
import AlbumModel from "./AlbumModel";


class AlbumsListModel extends JSModel {

    constructor(json) {
        super();

        if (this.validate(json)) {
            this.albumsCount = json.albumsCount;
            this.albums = json.results.map((el) => new AlbumModel(el));
        }
    }

}


export default AlbumsListModel;
