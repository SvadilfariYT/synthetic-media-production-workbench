import React from 'react';
import LoadingIndicator from './LoadingIndicator';
import './Message.css'; // Path to your Message component's CSS
import UserIcon from './imgs/icons/user-icon.png'; // User icon PNG
import BotIcon from './imgs/icons/bot-icon.png'; // Bot icon PNG

function Message({ text, sender }) {
  const isThinking = text === "..."; // Check if this is a thinking message
  const icon = sender === 'user' ? UserIcon : BotIcon;

  return (
    <div className={`message ${sender}`}>
      <div className="sender-icon">
        {/* Display the icon based on sender */}
        <img src={icon} alt={`${sender} icon`} width="24" height="24" />
      </div>
      <div className="text">
        {/* If it's a thinking message, show a loading indicator; otherwise, show text */}
        {isThinking ? <LoadingIndicator /> : text}
      </div>
    </div>
  );
}

export default Message;
