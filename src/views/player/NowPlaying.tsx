import * as React from 'react'
import classNames from 'classnames'

import type { Music } from '@/models'
import { getImgUrlWithSize } from '@/utils'

interface IProps {
  music: Music
  className?: string
}

const NowPlaying = ({ music, className }: IProps) => {
  return (
    <div className={classNames(
      'now-playing flex gap-3',
      className,
    )}>
      <img className="w-48px h-48px rounded-md cursor-pointer" src={getImgUrlWithSize(music.album.picUrl, 224)} />
      <div className="flex flex-col justify-around">
        <span>{music.name}</span>
        <span className="text-xs text-primary line-clamp-1">{music.artists
          .map(item => item.name)
          .join(', ')}</span>
      </div>
    </div>
  )
}

export default NowPlaying
