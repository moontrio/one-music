import * as React from 'react'
import type { Music } from '@/models'
import { getImgUrlWithSize } from '@/utils'

const NowPlaying = ({ music }: { music: Music }) => {
  return (
    <div className="now-playing flex gap-3">
      <img className="w-48px h-48px rounded-md cursor-pointer" src={getImgUrlWithSize(music.album.picUrl, 224)} />
      <div className="flex flex-col justify-around">
        <span>{music.name}</span>
        <span className="text-xs text-gray-700 line-clamp-1">{music.artists
          .map(item => item.name)
          .join(', ')}</span>
      </div>
    </div>
  )
}

export default NowPlaying
