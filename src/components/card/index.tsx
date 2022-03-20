import React from 'react'
import Cover from '@/components/cover'

export interface CardProps {
  imgSrc: string
  title: string
  subtitle: string
}
const Card = (props: CardProps) => {
  return (<div className="card-container flex flex-col">
    {/* TODO: 图片懒加载 */}
    {/* <img className="rounded-xl" src={props.imgSrc} /> */}
    <Cover imgUrl={props.imgSrc} />
    <span className="mt-3 text-base font-semibold line-clamp-2">{props.title}</span>
    <span className="text-sm font-normal line-clamp-1">{props.subtitle}</span>
  </div>)
}

export default Card
