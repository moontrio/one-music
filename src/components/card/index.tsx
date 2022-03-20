import React from 'react'
import Cover from '@/components/cover'

export interface CardProps {
  imgUrl: string
  title: string
  subtitle: string
  // FIXME: does it repeat?
  handleClickCover?: () => void
  handleClickPlay?: () => void
}
const Card = (props: CardProps) => {
  return (<div className="card-container flex flex-col">
    {/* TODO: 图片懒加载 */}
    {/* <img className="rounded-xl" src={props.imgUrl} /> */}
    <Cover imgUrl={props.imgUrl} handleClickCover={props.handleClickCover} handleClickPlay={props.handleClickPlay} />
    <span className="mt-3 text-base font-semibold line-clamp-2">{props.title}</span>
    <span className="text-sm font-normal line-clamp-1">{props.subtitle}</span>
  </div>)
}

export default Card
