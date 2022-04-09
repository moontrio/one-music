export const getMusicSrc: (id?: number) => string = (id) => {
  return id ? `https://music.163.com/song/media/outer/url?id=${id}.mp3` : ''
}
