import React, { useState, useEffect } from "react";

import { IoSend } from "react-icons/io5";

import loading_chats from "../../assets/loading-chats.gif";
import no_chat from "../../assets/no-chat.gif";
import user_profile from "../../assets/user-profile.png";
import zyra_profile from "../../assets/zyra-profile.png";

import "./Chats.css";

import "../../../Chatbot.js";

function Chats({ userName }) {
  const [chats, setChats] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [userInput, setUserInput] = useState("");

  const awakeZyra = () => {
    setChats([
      ...chats,
      {
        id: crypto.randomUUID(),
        profile: "zyra",
        message: `“Welcome! I’m your AI-powered assistant, ready to help you with anything you need.”`,
      },
    ]);
    setShowLoading(false);
  };

  const handleSend = () => {
    if (userInput.trim() !== "") {
      const newChatMessages = [
        ...chats,
        {
          id: crypto.randomUUID(),
          profile: "user",
          message: userInput,
        },
      ];
      setChats(newChatMessages);

      const res = Chatbot.getResponse(userInput);
      setChats([
        ...newChatMessages,
        {
          id: crypto.randomUUID(),
          profile: "zyra",
          message: res,
        },
      ]);

      setUserInput("");
    }
  };

  useEffect(() => {
    if (showLoading) {
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showLoading]);

  return (
    <div>
      <div
        className={`chats-container ${chats.length === 0 ? "without" : "with"}`}
      >
        {!showLoading ? (
          chats.length === 0 ? (
            <div
              className="patch-box
        "
            >
              <img src={no_chat} />
              <h3>No chats found</h3>
              <button
                style={{
                  color: "white",
                  backgroundImage: "linear-gradient(#f3aa00 , #ca0c00)",
                  fontWeight: "600",
                  width: "150px",
                }}
                onClick={awakeZyra}
              >
                Awake Zyra!
              </button>
            </div>
          ) : (
            chats.map((chat) => (
              <div
                className={`chat-container ${chat.profile}-chat`}
                key={chat.id}
              >
                <img
                  src={chat.profile === "zyra" ? zyra_profile : user_profile}
                  className={chat.profile === "zyra" ? "zyra_img" : "user_img"}
                />
                <p className="chat">{chat.message}</p>
              </div>
            ))
          )
        ) : (
          <div className="patch-box">
            <img src={loading_chats} />
            <h3>Loading chats</h3>
          </div>
        )}
      </div>
      <div className="input-box-container">
        <input
          type="text"
          className="chat-input-box"
          placeholder={`Hi ${userName}, how can I assist you ?`}
          value={userInput}
          onChange={() => setUserInput(event.target.value)}
        />
        <button
          style={{
            color: "white",
            backgroundColor: "#ffbb00",
            width: "80px",
            borderRadius: "0 0 25px 0 ",
          }}
          onClick={handleSend}
        >
          <IoSend size={30} />
        </button>
      </div>
    </div>
  );
}

export default Chats;
