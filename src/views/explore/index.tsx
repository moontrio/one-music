import React, { useEffect, useState } from 'react'
import {
  // getHighQualityPlaylist,
  // getRecommendPlaylist,
  getAlbumNew,
  getPersonalizedNewSong,
} from '@/api'
import Card from '@/components/card'

export default function Explore() {
  // const [highQualityPlaylists, setHighQualityPlaylists] = useState([])
  const [newSongs, setNewSongs] = useState([])
  const [newAlbums, setNewAlbums] = useState([])

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
        {/* <div className="mb-5 text-28px font-semibold">精品歌单</div>
        <div className="grid grid-cols-5 gap-6">
          {highQualityPlaylists.map((playlist: any) => (
            <Card
              key={playlist.id}
              imgSrc={getMiddleSizeImageUrl(playlist.coverImgUrl)}
              title={playlist.name}
              subtitle={playlist.tag}
            />
          ))}
        </div> */}

        <div className="my-5 text-28px font-semibold">新歌速递</div>
        <div className="grid grid-cols-5 gap-6">
          {newSongs.map((song: any) => (
            <Card
              key={song.id}
              imgSrc={getMiddleSizeImageUrl(song.picUrl)}
              title={song.name} subtitle={song?.song.artists[0].name}
            />
          ))}
        </div>

        <div className="my-5 text-28px font-semibold">新专速递</div>
        <div className="grid grid-cols-5 gap-6">
          {newAlbums.map((album: any) => (
            <Card
              key={album.id}
              imgSrc={getMiddleSizeImageUrl(album.picUrl)}
              title={album.name} subtitle={album?.artist.name}
            />
          ))}
        </div>

      </div>
    </div>
  )
}
