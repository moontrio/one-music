import React from 'react'
import { formatMilliseconds } from '@/utils'
import './TrackListRow.css'

// TODO: 要不对接口请求的数据做个 adapter？鬼知道 dt ar 是啥鬼东西？？
const TrackListRow = (props: any) => {
  const {
    song,
    index,
    clickPlay = () => {}, // TODO: 改成点击 play icon 播放？
  } = props
  const {
    name,
    dt,
    ar,
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
      <span className="text-xs text-gray-700"> - {ar.map((item: any) => item?.name).join('/')}</span>
    </span>
    <span className="flex justify-end">
      <i className="track__icon icon-like" />
      <span className="ml-2">{formatMilliseconds(dt)}</span>
    </span>
  </div>
}

export default TrackListRow
