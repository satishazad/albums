

const Album = {
    name: 'Album',
    primaryKey: 'id',
    properties: {
        id: 'int',
        trackId: 'int',
        artistId: 'int',
        collectionId: 'int',
        artistName: 'string',
        collectionName: 'string',
        trackName: 'string',
        collectionCensoredName: 'string',
        trackCensoredName: 'string',
        artistViewUrl: 'string',
        collectionViewUrl: 'string',
        trackViewUrl: 'string',
        previewUrl: 'string',
        artworkUrl30: 'string',
        artworkUrl60: 'string',
        artworkUrl100: 'string',
        collectionPrice: 'int',
        trackPrice: 'int',
        releaseDate: 'string',
        collectionExplicitness: 'string',
        trackExplicitness: 'string',
        discCount: 'string',
        discNumber: 'string',
        trackCount: 'string',
        trackNumber: 'string',
        country: 'string',
        currency: 'string',
        primaryGenreName: 'string',
        isStreamable: 'bool',
    }
}


export {
    Album
}
