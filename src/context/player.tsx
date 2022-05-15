import * as React from 'react'
import { createContext, useMemo, useReducer } from 'react'
import { initialPlayerState, playerReducer } from '@/reducers/player'
import { useAudio } from '@/hooks'

export const PlayerStateContext: React.Context<any> = createContext(null)
export const PlayerDispatchContext: React.Context<any> = createContext(null)
export const AudioContext: React.Context<any> = createContext(null)

export const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const [playerState, playerDispatch] = useReducer(playerReducer, initialPlayerState)

  const { musicSrc, musicInfo } = playerState

  const [audio, audioState, audioControls, audioRef] = useAudio({
    src: musicSrc,
    autoPlay: true,
  })

  // TODO: 是否 memo？audio 一直变化的
  const audioInfo = useMemo(() => ({
    audio,
    state: audioState,
    controls: audioControls,
    ref: audioRef,
  }), [musicSrc, audio, audioState, audioControls, audioRef])

  return (
    <PlayerDispatchContext.Provider value={playerDispatch}>
      <PlayerStateContext.Provider value={playerState}>
        <AudioContext.Provider value={[audioInfo, musicInfo]}>
          {audio}
          {children}
        </AudioContext.Provider>
      </PlayerStateContext.Provider>
    </PlayerDispatchContext.Provider>
  )
}
