import React from 'react';
import Avatar from '@material-ui/core/Avatar';

// STATICS
import './SidebarChat.css';

const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <Avatar />

      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>@desc of Room</p>
      </div>
    </div>
  );
};

export default SidebarChat;
