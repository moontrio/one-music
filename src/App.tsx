import React, { useState } from "react";
import "./App.css";

import Navigation from './components/navigation'
import Button from './components/button'
import Input from './components/input'

import { NAVIGATION_LIST } from "./constants";

function App() {


  return (
    <div className="App h-screen flex static">
      {/* side bar */}
      <aside className="p-8 bg-white">
        <div className="py-2 px-4 text-gray-400">Browse</div>
        <Navigation navigationList={NAVIGATION_LIST} />
      </aside>
      {/* main */}
      <main className="flex-grow bg-gray-100 p-6">
        <Input />
        <Button
          icon="icon-search"
        >
          button
        </Button>
        <Button>
          button
        </Button>
      </main>
      {/* tool bar */}
      <div className="absolute bottom-0 w-full p-6 bg-white rounded-t-3xl toolbar">tool bar</div>
    </div>
  );
}

export default App;
