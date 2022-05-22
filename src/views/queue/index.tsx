import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { PlaylistRow } from '@/components/track'

import { ACTIONS as PLAYER_ACTIONS } from '@/reducers/player'
import { PlayerDispatchContext, PlayerStateContext } from '@/context/player'
import type { Music } from '@/models'

function Queue() {
  const navigate = useNavigate()

  const playerState = useContext(PlayerStateContext)
  const playerDispatch = useContext(PlayerDispatchContext)

  const { playlist = [], index = 0 } = playerState
  const currentSong = playlist[index]
  const restSong = playlist.slice(index + 1)

  function play(song: Music, idx: number) {
    playerDispatch({
      type: PLAYER_ACTIONS.PLAY,
      payload: {
        index: index + idx + 1,
        musicId: song.id,
        musicInfo: song,
      },
    })
  }

  return (playlist.length
    ? (<div>
      <h2 className="my-3 text-xl">正在播放</h2>
      <PlaylistRow song={currentSong}></PlaylistRow>
      <h2 className="my-3 text-xl">即将播放</h2>
      <div>
        {restSong.map((song: Music, idx: number) => (
          <PlaylistRow
            key={song.id}
            song={song}
            play={() => play(song, idx)}
          />
        ))}
      </div>
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
