import React from "react";
import "./chatButton.scss";
const ChatButton = ({ children }) => {
  return (
    <>
      <button className="chatButton">{children}</button>
    </>
  );
};
export default ChatButton;
