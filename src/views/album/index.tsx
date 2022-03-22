import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAlbum } from '@/api'
import Cover from '@/components/cover'

function millis2MiniutesAndSeconds(millis: number) {
  const minutes = Math.floor(millis / 60000);
  const seconds = +((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

const AlbumSong = (props) => {
  return (<div className="album-song flex items-center p-2 h-48px">
    <div className="flex-1 font-semibold">
      <span className="text-lg">{props.name}</span>
      { props.alia.length > 0 && <span className="pl-2 text-gray-400">({props.alia})</span> }
    </div>
    <span>{millis2MiniutesAndSeconds(props.dt)}</span>
  </div>)
}

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

    <div className="album-songs">
      {
        songs.map(song => (<AlbumSong key={song.id} {...song} />))
      }
    </div>
  </div>)
}

export default Album
