import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { PlayerDispatchContext, PlayerStateContext } from '@/context/player'
import type { Music } from '@/models'

function Queue() {
  const navigate = useNavigate()

  const playerState = useContext(PlayerStateContext)
  const playerDispatch = useContext(PlayerDispatchContext)

  const { playlist = [], index = 0 } = playerState
  const currentMusic = playlist[index]
  const restMusic = playlist.slice(index + 1)

  return (playlist.length
    ? (<div>
      <h2>正在播放</h2>
      <h2>即将播放</h2>
    </div>)
    : (<div className="wh-full flex-center flex-col">
      <i className="icon-playlist !text-sky-500 mb-60px transform scale-800" />
      <button
        className="btn btn-blue"
        onClick={() => { navigate('/explore') }}
      >发现你感兴趣的都内容</button>
    </div>)
  )
}

export default Queue
