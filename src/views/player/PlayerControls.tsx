import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import VolumeControl from './VolumeControl'

const PlayerControls = () => {
  const navigate = useNavigate()

  return (
    <div>
      <i
        className="icon-playlist one-icon-button"
        onClick={() => { navigate('/queue') }}
      />
      <i className="icon-repeat one-icon-button" />
      <i className="icon-shuffle one-icon-button" />
      <VolumeControl />
    </div>
  )
}

export default PlayerControls
