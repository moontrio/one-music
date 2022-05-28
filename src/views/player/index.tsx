import * as React from 'react'
import { useContext, useState } from 'react'

import NowPlaying from './NowPlaying'
import CenterControl from './CenterControl'
import PlayerControl from './PlayerControl'
import Slider from '@/components/slider'

import { AudioContext, MusicContext } from '@/context/player'

const Player = () => {
  const musicInfo = useContext(MusicContext)!
  const audioInfo = useContext(AudioContext)!
  const { state } = audioInfo
  return (
    <div className="relative h-full">
      <Slider className="absolute -top-6px w-full" min={0} max={state.duration} step={1} value={state.time} />
      <div className="player-bar grid grid-cols-3 place-items-center px-4 wh-full">
        <div className="player-music-info justify-self-start">
          { musicInfo && <NowPlaying music={musicInfo} /> }
        </div>
        <CenterControl className="player-operations" />
        <PlayerControl className="player-controls justify-self-end" />
      </div>
    </div>
  )
}

export default Player
