export * from './utils'

export interface Artist {
  id: number
  name: string
}

export interface Album {
  id: number
  name: string
  picUrl: string
}

export interface Music {
  id: number
  name: string
  duration: number
  artists: Artist[]
  album: Album
}
