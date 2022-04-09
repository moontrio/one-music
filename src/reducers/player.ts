import type { Action } from './types'
import { getMusicSrc } from '@/utils/business'

// TODO: action payload type
export interface PlayerState {
  musicId: number
  musicSrc: string
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
