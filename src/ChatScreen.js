import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
  const [input, setInput] = useState(

  )
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg",
      message: "Whatsup",
    },
    {
      name: "yoyo",
      image:
        "https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg",
      message: "Whatsup",
    },

    {
      message: "Whatsup",
    },
  ]);

  const handleSend = e => {
    e.preventDefault();
    setMessages([...messages, {message: input}])
    setInput("");
  }

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">You matched</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message} </p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message} </p>
          </div>
        )
      )}

      <form className="chatScreen__input">
          <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeHolder="Type a message"
          type="text" />
          <button onClick={handleSend} type="submit" className="chatscreen__inputButton">SEND</button>
        </form>
    </div>
  );
}

export default ChatScreen;
