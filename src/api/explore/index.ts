import request from '@/utils/request';

export const getHighQuality = () =>
  request('playlist/highquality/list');
