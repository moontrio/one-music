import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

import Card from '@/components/card'
import { getImgUrlWithSize } from '@/utils'

import type { Album, Music } from '@/models'
import { PlayerDispatchContext } from '@/context/player'
import { ACTIONS as PLAYER_ACTIONS } from '@/reducers/player'
import {
  getAlbum,
  getNewAlbums,
  getPersonalizedNewSong,
} from '@/api'

export default function Explore() {
  const navigate = useNavigate()
  const playerDispatch = useContext(PlayerDispatchContext)

  const [newSongs, setNewSongs] = useState([])
  const [newAlbums, setNewAlbums] = useState([])

  function onClickCover(albumId: number | string) {
    navigate(`/album/${albumId}`)
  }
  function playTheSong(song: Music) {
    playerDispatch({
      type: PLAYER_ACTIONS.PLAY,
      payload: {
        musicId: song.id,
        musicInfo: song,
      },
    })
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

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <div className="my-5 text-28px font-semibold">新专速递</div>
      <div className="cover-row">
        {newAlbums.map((album: Album) => (
          <Card
            key={album.id}
            imgUrl={getImgUrlWithSize(album.picUrl, 512)}
            title={album.name} subtitle={album.artist!.name}
            onClickCover={() => onClickCover(album.id)}
            onClickPlay={() => playTheAlbum(album.id)}
          />
        ))}
      </div>

      <div className="my-5 text-28px font-semibold">新歌速递</div>
      <div className="cover-row">
        {newSongs.map((song: Music) => (
          <Card
            key={song.id}
            imgUrl={getImgUrlWithSize(song.album.picUrl, 512)}
            title={song.name} subtitle={song.artists[0].name}
            onClickCover={() => onClickCover(song.album.id)}
            onClickPlay={() => playTheSong(song)}
          />
        ))}
      </div>
    </div>
  )
}
