import React from 'react'
import classNames from 'classnames'

import './PlaylistRow.css'
import Cover from '@/components/cover'

import { formatMilliseconds, getImgUrlWithSize } from '@/utils'
import type { Artist, Music } from '@/models'

interface IProps {
  song: Music
  play?: () => void
}

function PlaylistRow(props: IProps) {
  const { song, play = () => {} } = props
  const {
    name,
    duration,
    artists,
    album,
  } = song

  return (
    <div
      className={classNames(
        'playlist-row',
        'grid grid-cols-[48px,4fr,2fr,minmax(120px,1fr)] items-center gap-4',
        'p-2 rounded-xl hover:bg-gray-100',
        'transform duration-300',
      )}
      onDoubleClick={play}
    >
      <Cover
        className="w-48px h-48px"
        imgUrl={getImgUrlWithSize(album.picUrl, 224)}
        showIcon={false}
        showShadow={false}
      />
      <span className="flex flex-col">
        <span>{name}</span>
        <span className="text-xs line-clamp-1">{artists.map((artist: Artist) => artist.name).join(', ')}</span>
      </span>
      <span>{album.name}</span>
      <span className="flex justify-end mr-4">
        <i className="icon-like mr-4 cursor-pointer hover:(transform scale-125 duration-300)" />
        <span>{formatMilliseconds(duration)}</span>
      </span>
    </div>
  )
}

export default PlaylistRow
