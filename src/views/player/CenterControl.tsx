import React, { useContext, useEffect } from 'react'
import classNames from 'classnames'

import { AudioContext, PlayerDispatchContext } from '@/context/player'
import { ACTIONS as PLAYER_ACTIONS } from '@/reducers/player'

interface Props {
  className?: string
}

const CenterControl = ({ className }: Props) => {
  const audioInfo = useContext(AudioContext)
  const playerDispatch = useContext(PlayerDispatchContext)!
  const { ref, state, controls } = audioInfo!

  useEffect(() => {
    ref.current!.addEventListener('ended', () => {
      playerDispatch({
        type: PLAYER_ACTIONS.NEXT,
      })
    })
  })

  // TODO: 想把这些逻辑操作都丢到一个 hook 里面，不想写在组件中
  function toggle() {
    if (state.paused)
      controls.play()
    else
      controls.pause()
  }
  function playNext() {
    playerDispatch({
      type: PLAYER_ACTIONS.NEXT,
    })
  }
  function playPrev() {
    playerDispatch({
      type: PLAYER_ACTIONS.PREV,
    })
  }

  return (
    <div className={classNames(
      'flex-center gap-1',
      className,
    )}>
      <i className="icon-prev one-icon-button" onClick={playPrev} />
      <i className={classNames([
        'one-icon-button !text-36px',
        state.paused ? 'icon-play' : 'icon-pause',
      ])}
      onClick={toggle}
      />
      <i className="icon-next one-icon-button" onClick={playNext} />
    </div>
  )
}

export default CenterControl
