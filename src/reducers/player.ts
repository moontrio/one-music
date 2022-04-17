import type { Action } from './types'
import { getMusicSrc } from '@/utils/business'
import type { Music } from '@/models'
import { transformToMusic } from '@/models'

// TODO: action payload type
export interface PlayerState {
  musicId: number
  musicSrc: string
  musicInfo: Music
}
type PlayerAction = Action<string, any>
type PlayerActionHandler = (state: PlayerState, action: PlayerAction) => PlayerState

export const ACTIONS = {
  PLAY: 'PLAY',
  // PAUSE: 'PAUSE',
  // TOGGLE: 'TOGGLE',
  // NEXT: 'NEXT',
  // PREV: 'PREV',
  // SHUFFLE: 'SHUFFLE',
}

const playHandler: PlayerActionHandler = (state, { payload }) => {
  return {
    musicId: payload.musicId,
    musicSrc: getMusicSrc(payload.musicId),
    musicInfo: transformToMusic(payload.music),
  }
}
// const toggleHandler: PlayerActionHandler = (state) => {
//   if (audioState.paused)
//     audioControls.play()
//   else
//     audioControls.pause()

//   return state
// }

const actionHandlers: Record<string, PlayerActionHandler> = {
  [ACTIONS.PLAY]: playHandler,
}

export function playerReducer(state: PlayerState, action: PlayerAction) {
  if (action.type in actionHandlers)
    return actionHandlers[action.type](state, action)

  return state
}

export const initialPlayerState = {} as PlayerState
