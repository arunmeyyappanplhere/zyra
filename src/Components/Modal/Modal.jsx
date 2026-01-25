import React from "react";
import "./Modal.css";

import { FaWindowClose } from "react-icons/fa";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";

function Modal({ userName, setUserName, setIsModalOpen, setIsMainOpen }) {
  const handleSave = () => {
    const inputField = document.querySelector(".username-input");
    const newName = inputField.value;
    if (newName.trim() === "") return;
    inputField.value = "";
    setUserName(newName);
    setIsMainOpen(true);
    setIsModalOpen(false);
  };
  return (
    <div className="modal-container">
      <div className="modal-wrapper">
        <div className="modal-header">
          <h2>Change user name</h2>
          <button
            className="close-modal-btn"
            onClick={() => {
              setIsModalOpen(false);
              setIsMainOpen(true);
            }}
          >
            <FaWindowClose size={30} color="red" />
          </button>
        </div>
        <div className="modal-body">
          <MdOutlineDriveFileRenameOutline size={30} color="#0F172A" />
          <input
            type="text"
            placeholder={userName}
            className="username-input"
          />
        </div>
        <div className="modal-footer">
          <button
            className="cancel-btn"
            onClick={() => {
              setIsModalOpen(false);
              setIsMainOpen(true);
            }}
            style={{
              backgroundColor: "#B91C1C",
              color: "white",
              width: "100px",
              height: "40px",
            }}
          >
            Cancel
          </button>
          <button
            className="save-btn"
            onClick={handleSave}
            style={{
              color: "white",
              backgroundColor: "#15803D",
              width: "100px",
              height: "40px",
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
