import * as React from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'

import Navigation from './components/navigation'
import type { NavigationItemValue } from './components/navigation/navigation'

import Explore from './views/explore'
import Album from './views/album'
import Player from './views/player'
import Queue from './views/queue'

import { NAVIGATION_LIST } from './constants'
import { PlayerProvider } from './context/player'

function App() {
  const navigate = useNavigate()
  return (
    <PlayerProvider>
      <div className="App h-screen flex static">

        <div className="main-container w-full h-full flex pb-64px">
          {/* side bar */}
          <aside className="aside-menu py-8 px-5 bg-white">
            <div className="py-2 px-4 text-neutral">Browse</div>
            <Navigation
              navigationList={NAVIGATION_LIST}
              // TODO: 把左侧菜单，以及路由跳转的功能，都放到一个组件中去
              clickHandle={ (value: NavigationItemValue) => navigate(value) }
            />
          </aside>
          {/* main */}
          <main className="flex-grow p-6 overflow-auto">
            <Routes>
              <Route path="/" element={<Navigate to="explore" />} />
              <Route path="explore" element={<Explore />} />
              <Route path="album/:albumId" element={<Album />} />

              <Route path="queue" element={<Queue />} />
            </Routes>
          </main>
        </div>

        {/* tool bar */}
        <footer className="fixed bottom-0 w-full h-64px bg-white toolbar">
          <Player />
        </footer>
      </div>
    </PlayerProvider>
  )
}

export default App
