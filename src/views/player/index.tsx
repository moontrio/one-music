import * as React from 'react'
import { useContext } from 'react'
import classNames from 'classnames'
import NowPlaying from './NowPlaying'
import PlayerControls from './PlayerControls'
import { AudioContext } from '@/context/player'

const Player = () => {
  // TODO: context 和 reducer 的类型提示断了。。
  const [audioInfo, musicInfo] = useContext(AudioContext)
  const { state, controls } = audioInfo

  // TODO: 想把这些逻辑操作都丢到一个 hook 里面，不想写在组件中
  const toggle = () => {
    if (state.paused)
      controls.play()
    else
      controls.pause()
  }

  return (<div className="player-bar grid grid-cols-3 place-items-center px-4 wh-full">
    <div className="player-music-info justify-self-start">
      { musicInfo && <NowPlaying music={musicInfo} /> }
    </div>
    {/* TODO: extract as a component */}
    <div className="player-operations flex-center gap-1">
      <i className="icon-prev one-icon-button" />
      <i className={classNames([
        'one-icon-button !text-36px',
        state.paused ? 'icon-play' : 'icon-pause',
      ])}
      onClick={toggle}
      />
      <i className="icon-next one-icon-button" />
    </div>
    <div className="player-controls justify-self-end">
      < PlayerControls />
    </div>
  </div>)
}

export default Player
