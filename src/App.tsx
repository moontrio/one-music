import React from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css';

import Navigation from './components/navigation';
import { NavigationItemValue } from './components/navigation/navigation';

import Explore from './views/explore';

import { NAVIGATION_LIST } from './constants';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App h-screen flex static">
      {/* side bar */}
      <aside className="py-8 px-5 bg-white">
        <div className="py-2 px-4 text-gray-400">Browse</div>
        <Navigation
          navigationList={NAVIGATION_LIST}
          // TODO: 把左侧菜单，以及路由跳转的功能，都放到一个组件中去
          clickHandle={ (value: NavigationItemValue) => navigate(value) }
        />
      </aside>
      {/* main */}
      <main className="flex-grow bg-gray-100 p-6">
        <Routes>
          <Route path="/" element={<div>home</div>} />
          <Route path="explore" element={<Explore />} />
        </Routes>
      </main>
      {/* tool bar */}
      <div className="absolute bottom-0 w-full p-6 bg-white rounded-t-3xl toolbar">tool bar</div>
    </div>
  );
}

export default App;
