import type { Action } from './types'
import { getMusicSrc } from '@/utils/business'
import type { Music } from '@/models'

// TODO: action payload type
export interface PlayerState {
  playlist: Music[]
  index: number
  musicId: number
  musicSrc: string
  musicInfo: Music
}
type PlayerAction = Action<string, PlayerState>
type PlayerActionHandler = (state: PlayerState, action: PlayerAction) => PlayerState

// TODO: 哪些 state/action 属于 player，哪些 state/action 属于 audio ?
export const ACTIONS = {
  PLAY: 'PLAY',
  PLAY_THE_LIST: 'PLAY_THE_LIST',
  NEXT: 'NEXT',
  PREV: 'PREV',
  // PAUSE: 'PAUSE',
  // TOGGLE: 'TOGGLE',
  // SHUFFLE: 'SHUFFLE',
}

const playHandler: PlayerActionHandler = (state, { payload }) => {
  const { musicInfo } = payload
  const { playlist = [] } = state
  if (!playlist.includes(musicInfo))
    playlist.push(musicInfo)

  return {
    ...state,
    ...payload,
    playlist,
    musicId: payload.musicId,
    musicSrc: getMusicSrc(payload.musicId),
    musicInfo: payload.musicInfo,
  }
}

const playTheListHandler: PlayerActionHandler = (state, { payload }) => {
  const { playlist = [] } = payload as PlayerState
  const [firstSong] = playlist
  return {
    playlist,
    index: 0,
    musicId: firstSong.id,
    musicSrc: getMusicSrc(firstSong.id),
    musicInfo: firstSong,
  }
}

const prevOrNext: (isNext: boolean) => PlayerActionHandler = isNext => (state) => {
  const { playlist = [], index = 0 } = state
  if (!playlist.length) return state

  const nextIndex = isNext
    ? (index + 1) % playlist.length
    : (index - 1) % playlist.length
  const nextMusic = playlist[nextIndex]
  return {
    ...state,
    index: nextIndex,
    musicId: nextMusic.id,
    musicSrc: getMusicSrc(nextMusic.id),
    musicInfo: nextMusic,
  }
}

const nextHandler: PlayerActionHandler = prevOrNext(true)

const prevHandler: PlayerActionHandler = prevOrNext(false)

const actionHandlers: Record<string, PlayerActionHandler> = {
  [ACTIONS.PLAY]: playHandler,
  [ACTIONS.PLAY_THE_LIST]: playTheListHandler,
  [ACTIONS.NEXT]: nextHandler,
  [ACTIONS.PREV]: prevHandler,
}

export function playerReducer(state: PlayerState, action: PlayerAction) {
  if (action.type in actionHandlers)
    return actionHandlers[action.type](state, action)

  return state
}

export const initialPlayerState = {} as PlayerState
