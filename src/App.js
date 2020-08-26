import React from 'react';
import './App.css';
import Sidebar from "./Sidebar"
import Widget from "./Widget"
import Feed from "./Feed"


function App() {
  return (
    //BEM
    <div className="app">
      {/*  Side bar*/}
      <Sidebar />
      {/* Feed */}
      <Feed />

      {/*  Widgets*/}
      <Widget />



    </div>
  );
}

export default App;
