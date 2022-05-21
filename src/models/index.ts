export * from './utils'

export interface Artist {
  id: number
  name: string
}

export interface Album {
  id: number
  name: string
  picUrl: string
  artist?: Artist
  artists?: Artist[]
  size?: number
  publishTime?: number
  description?: string
}

export interface Music {
  id: number
  name: string
  duration: number
  artists: Artist[]
  album: Album
}
