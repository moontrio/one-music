import React, { useState } from "react";
import "./App.css";

import Navigation from './components/navigation'

import { NAVIGATION_LIST } from "./constants";

function App() {


  return (
    <div className="App h-screen flex static">
      {/* side bar */}
      <aside className="p-10 pr-16 bg-white">
        <div className="py-4 text-gray-600">Browse</div>
        <Navigation navigationList={NAVIGATION_LIST} />
      </aside>
      {/* main */}
      <main className="flex-grow bg-gray-100">
        <i className="iconfont icon-search"></i>
      </main>
      {/* tool bar */}
      <div className="absolute bottom-0 w-full p-6 bg-white rounded-t-3xl toolbar">tool bar</div>
    </div>
  );
}

export default App;
