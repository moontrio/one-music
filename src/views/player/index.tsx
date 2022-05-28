import * as React from 'react'
import { useContext } from 'react'

import NowPlaying from './NowPlaying'
import CenterControl from './CenterControl'
import PlayerControl from './PlayerControl'
import { MusicContext } from '@/context/player'

const Player = () => {
  const musicInfo = useContext(MusicContext)
  return (<div className="player-bar grid grid-cols-3 place-items-center px-4 wh-full">
    <div className="player-music-info justify-self-start">
      { musicInfo && <NowPlaying music={musicInfo} /> }
    </div>
    <CenterControl className="player-operations" />
    <PlayerControl className="player-controls justify-self-end" />
  </div>)
}

export default Player
