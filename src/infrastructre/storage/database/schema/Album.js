

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
        collectionPrice: { type: 'int', default: 0 },
        trackPrice: { type: 'int', default: 0 },
        releaseDate: 'string',
        collectionExplicitness: 'string',
        trackExplicitness: 'string',
        discCount: 'int',
        discNumber: 'int',
        trackCount: 'int',
        trackNumber: 'int',
        country: 'string',
        currency: 'string',
        primaryGenreName: 'string',
        isStreamable: 'bool',
    }
}


export {
    Album
}
