import React from 'react'
import classNames from 'classnames'

import './TrackListRow.css'

import { formatMilliseconds } from '@/utils'
import type { Artist, Music } from '@/models'

interface IProps {
  song: Music
  index: number
  play: (song: Music) => void
}

const TrackListRow = (props: IProps) => {
  const {
    song,
    index,
    play = () => {},
  } = props
  const {
    name,
    duration,
    artists,
  } = song

  return <div className={classNames(
    'track',
    'grid grid-cols-[16px,1fr,minmax(120px,1fr)] items-center gap-4',
    'p-4 rounded-md hover:bg-gray-100',
    'transform duration-300',
  )}>
    <span className="track__index">
      <span className="text-xs text-gray-700">{index}</span>
      <i
        className="track__icon icon-play"
        onClick={() => play(song) }
      />
    </span>

    <span className="line-clamp-1">
      <span>{name}</span>
      <span className="text-xs text-gray-700"> - {artists.map((artist: Artist) => artist?.name).join('/')}</span>
    </span>
    <span className="flex justify-end mr-2">
      <i className="track__icon icon-like mr-4" />
      <span>{formatMilliseconds(duration)}</span>
    </span>
  </div>
}

export default TrackListRow
