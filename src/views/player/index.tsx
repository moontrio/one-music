import * as React from 'react'
import { useContext } from 'react'
import classNames from 'classnames'
import { AudioContext } from '@/context/player'

const Player = () => {
  // TODO: context 和 reducer 的类型提示断了。。
  const audioInfo = useContext(AudioContext)
  const { state, controls } = audioInfo

  // TODO: 想把这些逻辑操作都丢到一个 hook 里面，不想写在组件中
  const toggle = () => {
    if (state.paused)
      controls.play()
    else
      controls.pause()
  }

  return (<div className="player-bar grid grid-cols-3 place-items-center px-4 wh-full">
    <div className="player-music-info justify-self-start">music info</div>
    <div className="player-operations flex-center gap-1">
      <i className="icon-prev one-icon !text-24px" />
      <i className={classNames([
        'one-icon !text-32px',
        state.paused ? 'icon-play' : 'icon-pause',
      ])}
      onClick={toggle}
      />
      <i className="icon-next one-icon !text-24px" />
    </div>
    <div className="player-controls justify-self-end">other controls</div>
  </div>)
}

export default Player
