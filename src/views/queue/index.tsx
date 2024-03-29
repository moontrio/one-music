import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { PlaylistRow } from '@/components/track'
import { ReactComponent as Playlist } from '@/assets/icons/playlist.svg'

import { ACTIONS as PLAYER_ACTIONS } from '@/reducers/player'
import { PlayerDispatchContext, PlayerStateContext } from '@/context/player'
import type { Music } from '@/models'

function Queue() {
  const navigate = useNavigate()

  const playerState = useContext(PlayerStateContext)!
  const playerDispatch = useContext(PlayerDispatchContext)!

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
    ? (<div className="w-4/5 m-auto">
      <h2 className="mt-8 mb-4 text-3xl font-semibold">正在播放</h2>
      <PlaylistRow
        className="text-primary bg-neutralLighter hover:bg-neutralLighter"
        song={currentSong}
      />
      <h2 className="mt-8 mb-4 text-3xl font-semibold">即将播放</h2>
      <div className="grid grid-flow-row gap-2">
        {restSong.map((song: Music, idx: number) => (
          <PlaylistRow
            className="hover:bg-neutralLighter"
            key={song.id}
            song={song}
            play={() => play(song, idx)}
          />
        ))}
      </div>
    </div>)
    : (<div className="wh-full flex-center flex-col">
      <Playlist className="mb-2 text-primary" width="128px" height="128px" fill="currentColor" />
      <button
        className="btn btn-primary"
        onClick={() => { navigate('/explore') }}
      >发现你感兴趣的都内容</button>
    </div>)
  )
}

export default Queue
