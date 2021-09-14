import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App h-screen flex static">
      {/* side bar */}
      <aside className="p-6 bg-white">side bar</aside>
      {/* main */}
      <main className="flex-grow bg-gray-100">
        <i className="iconfont icon-search"></i>
      </main>
      {/* tool bar */}
      <div className="absolute bottom-0 w-full p-6 bg-gray-400 rounded-t-3xl">tool bar</div>
    </div>
  );
}

export default App;
