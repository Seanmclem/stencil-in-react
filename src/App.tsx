import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'site-switcher';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <my-component first='sean' middle='m' last='clem-react'></my-component>
      </header>
    </div>
  );
}

export default App;
