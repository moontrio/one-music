import * as React from 'react'
import VolumeControl from './VolumeControl'

const PlayerControls = () => {
  return (
    <div>
      <i className="icon-playlist one-icon-button" />
      <i className="icon-repeat one-icon-button" />
      <i className="icon-shuffle one-icon-button" />
      <VolumeControl />
    </div>
  )
}

export default PlayerControls
