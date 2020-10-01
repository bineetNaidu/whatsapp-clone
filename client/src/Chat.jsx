import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import IconButton from '@material-ui/core/IconButton';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from './api';
import useFormState from './hooks/useFormState';
import Moment from 'react-moment';

// STATICS
import './Chat.css';

const Chat = ({ messages, name }) => {
  // HOOKS
  const [msg, handleMsg, resetMsg] = useFormState('');
  // functions
  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post('/new', {
      name,
      message: msg,
      received: name ? true : false,
    });
    resetMsg();
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last Seen at...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {messages.map(({ received, name, message, _id, timestamp }) => (
          <p
            className={`chat__message ${received && 'chat__receiver'}`}
            key={_id}
          >
            <span className="chat__name">{name}</span>
            {message}
            <span className="chat__timestamp">
              <Moment fromNow ago>
                {timestamp}
              </Moment>
            </span>
          </p>
        ))}
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            type="text"
            placeholder="Type a message"
            value={msg}
            onChange={handleMsg}
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
