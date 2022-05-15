import React from 'react'
import './TrackListRow.css'

import { formatMilliseconds } from '@/utils'
import type { Artist, Music } from '@/models'

interface IProps {
  song: Music
  index: number
  clickPlay: (song: Music) => void
}

const TrackListRow = (props: IProps) => {
  const {
    song,
    index,
    clickPlay = () => {},
  } = props
  const {
    name,
    duration,
    artists,
  } = song

  return <div
    className="track px-4 grid gap-4 items-center h-54px rounded-md hover:bg-gray-200"
  >
    <span className="track__index">
      <span className="text-xs text-gray-700">{index}</span>
      <i
        className="track__icon icon-play"
        onClick={() => clickPlay(song) }
      />
    </span>

    <span>
      <span>{name}</span>
      <span className="text-xs text-gray-700"> - {artists.map((artist: Artist) => artist?.name).join('/')}</span>
    </span>
    <span className="flex justify-end">
      <i className="track__icon icon-like" />
      <span className="ml-2">{formatMilliseconds(duration)}</span>
    </span>
  </div>
}

export default TrackListRow
