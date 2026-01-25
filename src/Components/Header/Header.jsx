import React, { useRef, useState } from "react";
import AppLogo from "../../assets/chat-bot.gif";
import Modal from "../Modal/Modal";
import "./Header.css";
function Header({
  isMainOpen,
  setIsMainOpen,
  isModalOpen,
  setIsModalOpen,
  userName,
}) {
  const handleChangeUserName = () => {
    setIsModalOpen(true);
    setIsMainOpen(false);
  };
  return (
    isMainOpen && (
      <div className="header-container">
        <img src={AppLogo} alt="App Logo" className="app-logo" />
        <div className="app-headline">
          <h1>
            <span className="make-it-big">Z</span>yra
          </h1>
          <p>
            Your <span className="make-it-yellow">AI</span> Chatbot Assistant
          </p>
        </div>
        <h2>
          Hi,{" "}
          <span onClick={handleChangeUserName} className="user-name">
            {userName}
          </span>
        </h2>
        {isModalOpen && (
          <div className="modal-wrapper">
            <Modal
              userName={userName}
              setUserName={setUserName}
              setIsModalOpen={setIsModalOpen}
              setIsMainOpen={setIsMainOpen}
            />
          </div>
        )}
      </div>
    )
  );
}

export default Header;
