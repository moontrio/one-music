import React from 'react'
import Cover from '@/components/cover'

export interface CardProps {
  imgUrl: string
  title: string
  subtitle: string
  // FIXME: does it repeat?
  onClickCover?: () => void
  onClickPlay?: () => void
}
const Card = (props: CardProps) => {
  return (<div className="card-container flex flex-col">
    {/* TODO: 图片懒加载 */}
    {/* <img className="rounded-xl" src={props.imgUrl} /> */}
    <Cover imgUrl={props.imgUrl} onClickCover={props.onClickCover} onClickPlay={props.onClickPlay} />
    <span className="mt-3 text-base font-semibold line-clamp-2">{props.title}</span>
    <span className="text-sm font-normal line-clamp-1">{props.subtitle}</span>
  </div>)
}

export default Card
