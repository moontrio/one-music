import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAlbum } from '@/api'
import Cover from '@/components/cover'

const Album = () => {
  const { albumId } = useParams()

  const [album, setAlbum] = useState<any>({})
  const [songs, setSongs] = useState<any>([])

  // TODO: extract as an util
  const generateImgUrlWithSize = (url: string, size: string | number) => `${url}?param=${size}y${size}`

  const fetchData = () => {
    // TODO: route params albumId undefined?
    if (!albumId) return

    getAlbum(albumId as string).then((data) => {
      setAlbum(data.album)
      setSongs(data.songs)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (album && <div className="album-container">
    <div className="album-info flex">
      <Cover className="w-300px h-300px" imgUrl={generateImgUrlWithSize(album.picUrl, 1024)} />
      <div className="flex-1 flex flex-col ml-56px">
        <div>{album?.name}</div>
        <div>{album?.artist?.name}</div>
        <p className="text-sm text-gray-800 line-clamp-10 whitespace-pre-wrap">{album?.description}</p>
      </div>
    </div>
  </div>)
}

export default Album
