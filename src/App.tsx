import React, { useState } from 'react';
import './App.css';

import request from './utils/request';

import Navigation from './components/navigation';

import { NAVIGATION_LIST } from './constants';

function App() {
  request.post('playlist/highquality/list')
    .then((response) => console.log(response));

  return (
    <div className="App h-screen flex static">
      {/* side bar */}
      <aside className="p-8 bg-white">
        <div className="py-2 px-4 text-gray-400">Browse</div>
        <Navigation navigationList={NAVIGATION_LIST} />
      </aside>
      {/* main */}
      <main className="flex-grow bg-gray-100 p-6">
      </main>
      {/* tool bar */}
      <div className="absolute bottom-0 w-full p-6 bg-white rounded-t-3xl toolbar">tool bar</div>
    </div>
  );
}

export default App;
