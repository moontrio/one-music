import React from 'react'

import classNames from 'classnames'

import './index.css'

export type CoverImg = string
export interface CoverProps {
  imgUrl: CoverImg
}

const Cover = (props: CoverProps) => {
  return (
    <div className="cover-container relative" >
      <button className="cover-icon-btn absolute-center z-10">
        <i className="cover-icon icon-play flex-center rounded-full" />
      </button>
      <img
        className="cover-img rounded-xl relative z-1 cursor-pointer"
        src={props.imgUrl}
      />
      <span
        className={classNames(
          'cover-shadow',

          // TODO: move class below to `cover-shadow`?
          'absolute top-3',
          'wh-full',
          'filter blur-lg',
          'transform scale-x-92 scale-y-96',
          'transition duration-300',

          // TODO: animation fade
          'invisible',
          'opacity-0',
        )}
        style={{
          backgroundImage: `url(${props.imgUrl})`,
        }}
      />
    </div>
  )
}

export default Cover
