
import JSModel from "react-native-jsmodel";


class AlbumModel extends JSModel {

    constructor(json) {
        super();

        if (this.validate(json)) {
            this.wrapperType = json.wrapperType;
            this.kind = json.kind;
            this.artistId = json.artistId;
            this.collectionId = json.collectionId;
            this.trackId = json.trackId;
            this.artistName = (json.artistName) ? json.artistName : '';
            this.collectionName = json.collectionName;
            this.trackName = json.trackName;
            this.collectionCensoredName = json.collectionCensoredName;
            this.trackCensoredName = json.trackCensoredName;
            this.artistViewUrl = json.artistViewUrl;
            this.collectionViewUrl = json.collectionViewUrl;
            this.trackViewUrl = json.trackViewUrl;
            this.previewUrl = json.previewUrl;
            this.artworkUrl30 = json.artworkUrl30;
            this.artworkUrl60 = json.artworkUrl60;
            this.artworkUrl100 = json.artworkUrl100;
            this.collectionPrice = json.collectionPrice;
            this.trackPrice = json.trackPrice;
            this.releaseDate = json.releaseDate;
            this.collectionExplicitness = json.collectionExplicitness;
            this.trackExplicitness = json.trackExplicitness;
            this.discCount = json.discCount;
            this.discNumber = json.discNumber;
            this.trackCount = json.trackCount;
            this.trackNumber = json.trackNumber;
            this.trackTimeMillis = json.trackTimeMillis;
            this.country = json.country;
            this.currency = json.currency;
            this.primaryGenreName = json.primaryGenreName;
            this.isStreamable = json.isStreamable;
        }
    }

}



export default AlbumModel;
