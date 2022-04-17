import type { Album, Artist, Music } from '.'

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
  }
}

export function transformToMusic(serverData: any): Music {
  return {
    id: serverData.id,
    name: serverData.name,
    duration: serverData.dt,
    artists: serverData?.ar.map(transformToArtist),
    album: transformToAlbum(serverData?.al),
  }
}
