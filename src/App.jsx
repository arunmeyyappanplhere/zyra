import { React, useState } from "react";
import Header from "./Components/Header/Header";
import Modal from "./Components/Modal/Modal";
import Chats from "./Components/Chats/Chats";

import "./App.css";

function App() {
  const [isMainOpen, setIsMainOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState("Guest");
  return (
    <div className="app-container">
      {isMainOpen && (
        <Header
          isMainOpen={isMainOpen}
          setIsMainOpen={setIsMainOpen}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          userName={userName}
        />
      )}
      {isModalOpen && (
        <Modal
          userName={userName}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          isMainOpen={isMainOpen}
          setIsMainOpen={setIsMainOpen}
          setUserName={setUserName}
        />
      )}
      {isMainOpen && <Chats userName={userName} />}
    </div>
  );
}
export default App;
