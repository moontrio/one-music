import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'
import Card from '@/components/card'
import {
  getAlbum,
  getNewAlbums,
  getPersonalizedNewSong,
} from '@/api'
import { getImgUrlWithSize } from '@/utils'
import { PlayerDispatchContext } from '@/context/player'
import { ACTIONS as PLAYER_ACTIONS } from '@/reducers/player'

export default function Explore() {
  const navigate = useNavigate()
  const playerDispatch = useContext(PlayerDispatchContext)

  const [newSongs, setNewSongs] = useState([])
  const [newAlbums, setNewAlbums] = useState([])

  const onClickCover = (albumId: number | string) => {
    navigate(`/album/${albumId}`)
  }
  const onClickPlay = () => {
    // console.log('play clicked')
  }
  function playTheAlbum(albumId: number) {
    getAlbum(albumId).then(({ songs }) => {
      playerDispatch({
        type: PLAYER_ACTIONS.PLAY_THE_LIST,
        payload: {
          playlist: songs,
        },
      })
    })
  }

  function fetchData() {
    getNewAlbums()
      .then((data) => {
        setNewAlbums(data.albums)
      })
    getPersonalizedNewSong()
      .then((data) => {
        setNewSongs(data.songs)
      })
  }

  const getMiddleSizeImageUrl = (url: string) => getImgUrlWithSize(url, 512)

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <div>
        {/* TODO: extract class */}

        <div className="my-5 text-28px font-semibold">新专速递</div>
        <div className="cover-row">
          {newAlbums.map((album: any) => (
            <Card
              key={album.id}
              imgUrl={getMiddleSizeImageUrl(album.picUrl)}
              title={album.name} subtitle={album?.artist.name}
              onClickCover={() => onClickCover(album.id)}
              onClickPlay={() => playTheAlbum(album.id)}
            />
          ))}
        </div>

        <div className="my-5 text-28px font-semibold">新歌速递</div>
        <div className="cover-row">
          {newSongs.map((song: any) => (
            <Card
              key={song.id}
              imgUrl={getMiddleSizeImageUrl(song.album.picUrl)}
              title={song.name} subtitle={song.artists[0].name}
              onClickCover={() => onClickCover(song.album.id)}
              onClickPlay={onClickPlay}
            />
          ))}
        </div>

      </div>
    </div>
  )
}
