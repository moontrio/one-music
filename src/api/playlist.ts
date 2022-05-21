import request from '@/utils/request'
import { transformToAlbum, transformToMusic } from '@/models'

/**
 * 推荐歌单
 * @url /personalized
 * @param limit default 30
 */
export const getRecommendPlaylist = (limit = 10) =>
  request({
    url: '/personalized',
    method: 'get',
    params: { limit },
  })

/**
 * 精品歌单
 * @param limit default 20
 * @returns
 */
export const getHighQualityPlaylist = (limit = 10) =>
  request({
    url: 'playlist/highquality/list',
    method: 'get',
    params: { limit },
  })

/**
 * 推荐音乐
 * @url /personalized/newsong
 * @param limit default 10
 */
export const getPersonalizedNewSong = (limit = 10) => request({
  url: '/personalized/newsong',
  method: 'get',
  params: { limit },
}).then(({ result = [] } = {}) => ({
  songs: result.map((item: any) => transformToMusic(item.song)),
}))

/**
 * 新专速递
 * @url /album/new
 * @param area
 * @param limit
 */
export const getNewAlbums = (area = 'all', limit = 10) => request({
  url: '/album/new',
  method: 'get',
  params: { area, limit },
}).then(({ albums = [] } = {}) => ({
  albums: albums.map(transformToAlbum),
}))
