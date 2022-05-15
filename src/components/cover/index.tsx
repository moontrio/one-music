import React from 'react'

import classNames from 'classnames'

import './index.css'

export type CoverImg = string
export interface CoverProps {
  imgUrl: CoverImg
  // radius?: string
  onClickCover?: () => void
  onClickPlay?: () => void

  className?: string
}

const Cover = (props: CoverProps) => {
  const onClickCover = props.onClickCover
  const onClickPlay = props.onClickPlay

  return (
    <div className={classNames([
      'cover-container relative rounded-xl children:rounded-lg',
      props.className,
    ])} >
      <button className="cover-icon-btn absolute-center">
        <i className="cover-icon icon-play relative z-10 flex-center rounded-full" onClick={onClickPlay} />
      </button>
      <img
        className="cover-img relative z-1 cursor-pointer"
        src={props.imgUrl}
        onClick={onClickCover}
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
