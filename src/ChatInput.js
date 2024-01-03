import React from 'react';
import "./ChatInput.css"

function ChatInput({ userInput, setUserInput, sendMessage }) {
    // Handle key press in the textarea
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault(); // Prevent the default action to stop from inserting a new line
            sendMessage(userInput);
        } else if (e.key === 'Enter' && e.shiftKey) {
            // Insert a line break
            setUserInput(userInput + '\n');
        }
    };

    return (
        <div className="input-container">
            <div className="input-container-inner">
                <textarea
                    className="chat-input"
                    value={userInput}
                    placeholder="Message ChatGPT..."
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button className="send-button" onClick={() => sendMessage(userInput)}>
                    {/* SVG icon */}
                </button>
            </div>
        </div>
    );
}
export default ChatInput;
