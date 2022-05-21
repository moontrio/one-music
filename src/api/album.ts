import { transformToAlbum, transformToMusic } from '@/models'
import request from '@/utils/request'

export const getAlbum = (id: number | string) => request({
  url: 'album',
  method: 'get',
  params: { id },
}).then(({ album, songs = [] } = {}) => ({
  album: transformToAlbum(album),
  songs: songs.map(transformToMusic),
}))
