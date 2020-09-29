import React from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';

// STATICS
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
      {/* Chat component */}
    </div>
  );
}

export default App;
