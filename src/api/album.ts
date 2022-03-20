import request from '@/utils/request'

export const getAlbum = (id: string) => request({
  url: 'album',
  method: 'get',
  params: { id },
})
