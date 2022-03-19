import request from '@/utils/request';

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
  });

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
  });

/**
 * 推荐音乐
 * @url /personalized/newsong
 * @param limit default 10
 */
export const getPersonalizedNewSong = (limit = 10) =>
  request(`/personalized/newsong?limit=${limit}`);

/**
 * 新专速递
 * @url /album/new
 * @param area
 * @param limit
 */
export const getAlbumNew = (area = 'all', limit = 10) =>
  request(`/album/new?area=${area}&limit=${limit}`);
