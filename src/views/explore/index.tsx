import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  // getHighQualityPlaylist,
  // getRecommendPlaylist,
  getAlbumNew,
  getPersonalizedNewSong,
} from '@/api'
import Card from '@/components/card'

import './index.css'

export default function Explore() {
  const navigate = useNavigate()

  // const [highQualityPlaylists, setHighQualityPlaylists] = useState([])
  const [newSongs, setNewSongs] = useState([])
  const [newAlbums, setNewAlbums] = useState([])

  const handleClickCover = (song) => {
    const albumId = song?.song.album.id
    // console.log('cover clicked', song, albumId)
    navigate(`/album/${albumId}`)
  }
  const handleClickPlay = () => {
    // console.log('play clicked')
  }

  const fetchData = () => {
    // getHighQualityPlaylist()
    //   .then((data) => {
    //     setHighQualityPlaylists(data.playlists)
    //   })
    getPersonalizedNewSong()
      .then((data) => {
        setNewSongs(data.result)
      })
    // getRecommendPlaylist()
    getAlbumNew()
      .then((data) => {
        setNewAlbums(data.albums)
      })
    // getHighQualityPlaylist();
  }

  const getMiddleSizeImageUrl = (url: string) => `${url}?params=512y512`

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <div>
        {/* TODO: extract class */}

        <div className="my-5 text-28px font-semibold">新歌速递</div>
        <div className="cover-row">
          {newSongs.map((song: any) => (
            <Card
              key={song.id}
              imgUrl={getMiddleSizeImageUrl(song.picUrl)}
              title={song.name} subtitle={song?.song.artists[0].name}
              handleClickCover={() => handleClickCover(song)}
              handleClickPlay={handleClickPlay}
            />
          ))}
        </div>

        <div className="my-5 text-28px font-semibold">新专速递</div>
        <div className="cover-row">
          {newAlbums.map((album: any) => (
            <Card
              key={album.id}
              imgUrl={getMiddleSizeImageUrl(album.picUrl)}
              title={album.name} subtitle={album?.artist.name}
            />
          ))}
        </div>

      </div>
    </div>
  )
}
