import React from 'react'
import { formatMilliseconds } from '@/utils'
import './tracklistRow.css'

// TODO: 要不对接口请求的数据做个 adapter？鬼知道 dt ar 是啥鬼东西？？
const TracklistRow = (props: any) => {
  const {
    song,
    clickRow = () => {}, // TODO: 改成点击 play icon 播放？
  } = props
  const {
    index,
    name,
    dt,
    ar,
  } = song

  return <div
    className="tracklist-row px-4 grid gap-4 items-center h-54px rounded-md hover:bg-gray-200"
    onClick={() => clickRow(song) }
  >
    <span>{index}</span>
    <span>
      <span>{name}</span>
      <span className="text-xs text-gray-700"> - {ar.map((item: any) => item?.name).join('/')}</span>
    </span>
    <span className="flex justify-end">
      <i className="icon-like" />
      <span className="ml-2">{formatMilliseconds(dt)}</span>
    </span>
  </div>
}

export default TracklistRow
