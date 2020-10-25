
import IRepository from "../../../../core/base_repository/IRepository";


const ALBUM_SCHEMA_KEYS = {
    NAME: 'Album',
    ID: 'Id'
}

class AlbumRepository extends IRepository {

    constructor() {
        super();


    }


    create(albums) {
        //super.create();
        let realm = this.database.realmObj;

        try {
            realm.write(() => {
               for(let i = 0; i < albums.length; i++) {
                   let data = albums[i];

                   realm.create(
                       ALBUM_SCHEMA_KEYS.NAME,
                       {
                           id: data.trackId,
                           trackId: data.trackId,
                           artistId: data.artistId,
                           collectionId: data.collectionId,
                           artistName: data.artistName,
                           collectionName: data.collectionName,
                           trackName: data.trackName,
                           collectionCensoredName: data.collectionCensoredName,
                           trackCensoredName: data.trackCensoredName,
                           artistViewUrl: data.artistViewUrl,
                           collectionViewUrl: data.collectionViewUrl,
                           trackViewUrl: data.trackViewUrl,
                           previewUrl: data.previewUrl,
                           artworkUrl30: data.artworkUrl30,
                           artworkUrl60: data.artworkUrl60,
                           artworkUrl100: data.artworkUrl100,
                           collectionPrice: data.collectionPrice,
                           trackPrice: data.trackPrice,
                           releaseDate: data.releaseDate,
                           collectionExplicitness: data.collectionExplicitness,
                           trackExplicitness: data.trackExplicitness,
                           discCount: data.discCount,
                           discNumber: data.discNumber,
                           trackCount: data.trackCount,
                           trackNumber: data.trackNumber,
                           country: data.country,
                           currency: data.currency,
                           primaryGenreName: data.primaryGenreName,
                           isStreamable: data.isStreamable,
                       }, true);
               }
            });
        } catch (e) {
            console.log('ERROR ', e);
        }
    }


    getAll() {
        //super.getAll();

    }
}


export default AlbumRepository;
