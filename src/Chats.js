import React from 'react'
import "./Chats.css";
import Chat from "./Chat"

function Chats() {
    return (
        <div className="chats">
        <Chat
          name='test'
          message='test'
          timestamp='when'
          profilePic='https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg'
          />
        <Chat
          name='test'
          message='test'
          timestamp='when'
          profilePic='https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg'
          />
        <Chat
          name='test'
          message='test'
          timestamp='when'
          profilePic='https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg'
          />
        <Chat
          name='test'
          message='test'
          timestamp='when'
          profilePic='https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg'
          />


        </div>
    )
}

export default Chats
