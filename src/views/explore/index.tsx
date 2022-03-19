import React, { useEffect, useState } from 'react'
import {
  // getRecommendPlaylist,
  // getPersonalizedNewSong,
  // getAlbumNew,
  getHighQualityPlaylist,
} from '@/api'



export default function Explore() {
  const [highQualityPlaylists, setHighQualityPlaylists] = useState([]);
  const fetchData = () => {
    getHighQualityPlaylist()
      .then((data) => {
        setHighQualityPlaylists(data.playlists);
      })

  }
  useEffect(() => {
    // getRecommendPlaylist();
    // getPersonalizedNewSong();
    // getAlbumNew();
    // getHighQualityPlaylist();
    fetchData();
  }, [])
  return (
    <div>
      <h1>Explore</h1>

      <div>
        <ul className="grid grid-cols-5 gap-4">
          {highQualityPlaylists.map((playlist: any) => (
            <li><img src={playlist.coverImgUrl} className="w-full" /></li>
          ))}
        </ul>

      </div>
    </div>
  )
}
