import React from 'react'

import classNames from 'classnames'

import './index.css'

export type CoverImg = string
export interface CoverProps {
  imgUrl: CoverImg
  showIcon?: boolean
  showShadow?: boolean
  // radius?: string
  onClickCover?: () => void
  onClickPlay?: () => void

  className?: string
}

const Cover = (props: CoverProps) => {
  const {
    imgUrl,
    showIcon = true,
    showShadow = true,
    onClickCover = () => {},
    onClickPlay = () => {},
    className,
  } = props

  return (
    <div className={classNames([
      'cover-container relative rounded-xl children:rounded-lg',
      className,
    ])} >
      <button className={classNames('cover-icon-btn absolute-center', !showIcon && 'hidden')}>
        <i className="cover-icon icon-play relative z-10 flex-center rounded-full" onClick={onClickPlay} />
      </button>
      <img
        className="cover-img relative cursor-pointer"
        src={imgUrl}
        onClick={onClickCover}
      />
      <span
        className={classNames(
          'cover-shadow',

          // TODO: move class below to `cover-shadow`?
          'absolute top-3 -z-1',
          'wh-full',
          'filter blur-lg',
          'transform scale-x-92 scale-y-96',
          'transition duration-300',

          // TODO: animation fade
          'invisible',
          'opacity-0',
          !showShadow && 'hidden',
        )}
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      />
    </div>
  )
}

export default Cover
