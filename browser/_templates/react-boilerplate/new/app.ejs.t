---
to: src/App.js
---
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <h1>App Name</h1>
        <Link exact to="/url" render={()=>{
          return <div/>
        }}>Link</Link>
      </header>
      <main>

      </main>
      <footer></footer>
    </div>
  );
}

export default App;
