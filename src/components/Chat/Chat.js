import React from 'react';
import { useParams } from 'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import {useHistory } from 'react-router-dom'

import  './Chat.css';

function Chat() {
    const { roomId } = useParams();
    const uhistory = useHistory()
    console.log(uhistory)
  return (

    
      <div className="chat">
         
          <div className="chat__header">
              <div className="chat__headerLeft">
                  <h4 className="chat__channelName">
                      <strong>{roomId}</strong>
                      <StarBorderOutlinedIcon/>
                  </h4>

              </div>
              <div className="chat__headerRight">
                  <p>
                      <InfoOutlinedIcon/> Details
                  </p>

              </div>

          </div>

      </div>
  );
}

export default Chat;