import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import axios from './api';

import { PUSHER_CLUSTER, PUSHER_KEY } from './env';

// STATICS
import './App.css';
function App() {
  // STATES
  const [messages, setMessages] = useState([]);

  // HOOKS
  useEffect(() => {
    axios.get('/sync').then((res) => {
      const data = res.data;
      if (data.success) {
        setMessages(data.data);
      } else {
        alert(data.err);
      }
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher(PUSHER_KEY, {
      cluster: PUSHER_CLUSTER,
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => setMessages([...messages, data]));

    // clean ups
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  // FUNCTIONS

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
