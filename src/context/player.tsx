import * as React from 'react'
import { createContext, useMemo, useReducer } from 'react'
import { initialPlayerState, playerReducer } from '@/reducers/player'
import { useAudio } from '@/hooks'
import type { PlayerAction, PlayerState } from '@/reducers/player'
import type { HTMLMediaControls, HTMLMediaState, MediaPropsWithRef } from '@/hooks/util/createHTMLMediaHook'
import type { Music } from '@/models'

export interface AudioInfo {
  ref: React.RefObject<HTMLAudioElement>
  state: HTMLMediaState
  controls: HTMLMediaControls
  audio: React.ReactElement<MediaPropsWithRef<HTMLAudioElement>>
}

export const PlayerStateContext = createContext<PlayerState | null>(null)
export const PlayerDispatchContext = createContext<React.Dispatch<PlayerAction> | null>(null)
export const AudioContext = createContext<AudioInfo | null>(null)
export const MusicContext = createContext<Music | null>(null)

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
        <AudioContext.Provider value={audioInfo}>
          <MusicContext.Provider value={musicInfo}>
            {audio}
            {children}
          </MusicContext.Provider>
        </AudioContext.Provider>
      </PlayerStateContext.Provider>
    </PlayerDispatchContext.Provider>
  )
}
