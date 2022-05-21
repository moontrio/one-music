import type { Album, Artist, Music } from '.'

// TODO: 可以做到更通用
type FieldKey = 'duration' | 'artists' | 'album'
const fieldMap = {
  duration: ['duration', 'dt'],
  artists: ['artists', 'ar'],
  album: ['album', 'al'],
}
function getField(serverData: any, fieldKey: FieldKey) {
  const possibleFieldKeys = fieldMap[fieldKey] || []
  for (const key of possibleFieldKeys)
    if (serverData[key]) return serverData[key]

  return undefined
}

export function transformToArtist(serverData: any): Artist {
  return {
    id: serverData.id,
    name: serverData.name,
  }
}

export function transformToAlbum(serverData: any): Album {
  return {
    id: serverData.id,
    name: serverData.name,
    picUrl: serverData.picUrl,
    artist: serverData.artist && transformToArtist(serverData.artist),
    artists: serverData.artists && serverData.artists.map(transformToArtist),
    size: serverData?.size,
    publishTime: serverData?.publishTime,
    description: serverData?.description,
  }
}

export function transformToMusic(serverData: any): Music {
  return {
    id: serverData.id,
    name: serverData.name,
    duration: getField(serverData, 'duration'),
    artists: (getField(serverData, 'artists') || []).map(transformToArtist),
    album: transformToAlbum(getField(serverData, 'album')),
  }
}
