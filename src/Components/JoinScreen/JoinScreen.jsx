import React, { useState } from "react";
import "./JoinScreen.css";

const applicationName = "=> Boom Chat App <="

export default function JoinScreen() {
  const [name, setName] = useState("");
  const [chatRoom, setChatRoom] = useState("");


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleChatRoomChange = (event) => {
    setChatRoom(event.target.value);
  };

  const submitForm = () => {
    

    const data = {
        author: name,
        chatRoom: chatRoom
    }

    alert(JSON.stringify(data));


    
  };

  return (
    <div className="main-container">
      <div className="join-screen">
        <div className="chat-header">
          <h1>{applicationName}</h1>
        </div>

        <div className="form-components">
          <div className="text-box">
            <h2>Name</h2>
            <input
              type="text"
              name="Name"
              placeholder="Type here..."
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="text-box">
            <h2>Chat Room</h2>
            <input
              type="text"
              name="chatRoom"
              placeholder="Type here..."
              value={chatRoom}
              onChange={handleChatRoomChange}
            />
          </div>

          <button
            name="submitButton"
            className="enter-button"
            onClick={() => submitForm()}            
            
          >
            Join Chat
          </button>
        </div>
      </div>
    </div>
  );
}
