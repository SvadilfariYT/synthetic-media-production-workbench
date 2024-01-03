import React, { useState } from 'react';
import Message from './Message'
import SuggestionPicker from './SuggestionPicker';
import ChatInput from './ChatInput';
import './Chatbot.css'; // Make sure the CSS file is correctly imported

const OPENAI_API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';

const getChatGPTResponse = async (prompt) => {
    try {
        const response = await fetch(OPENAI_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer YOUR_API_KEY_HERE` // Replace with your actual API key
            },
            body: JSON.stringify({
                prompt: prompt,
                max_tokens: 150
            })
        });

        const data = await response.json();
        return data.choices[0].text.trim();
    } catch (error) {
        console.error('Error calling OpenAI API:', error);
        return null;
    }
}


function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isBotThinking, setIsBotThinking] = useState(false);

    // Function to handle sending messages
    const sendMessage = (message) => {
        if (message.trim() !== '') {
            const newUserMessage = { text: message, sender: 'user' };
            setMessages(prevMessages => [...prevMessages, newUserMessage]);
            setUserInput(''); // Reset the input field after sending
            setIsBotThinking(true); // Bot is "thinking"

            // Simulate a bot response
            generateBotResponse(message);
        }
    };

    // Simulate generating a bot response
    const generateBotResponse = (userMessage) => {
        // Simulate a delay for bot response
        setTimeout(() => {
            const botMessage = { text: "This is a simulated response.", sender: 'bot' };
            setMessages(prevMessages => [...prevMessages, botMessage]);
            setIsBotThinking(false); // Bot is no longer "thinking"
            setSuggestions(["Hello!", "How are you?", "Tell me a joke.", "What's the weather like?"]);
        }, 5000); // Simulate a 2-second delay
    };
    // Function to set suggested input as user input
    const handleSuggestedInput = (suggestion) => {
        sendMessage(suggestion);
    };

    return (
        <div className="chatbot-container">
            <div className="messages-container">
                <div className="messages-container-inner">
                    {messages.map((message, index) => (
                        <Message key={index} text={message.text} sender={message.sender} />
                    ))}
                    {isBotThinking && <Message text="..." sender="bot" />} {/* Placeholder for thinking state */}
                </div>
            </div>
            <SuggestionPicker suggestions={suggestions} onSelect={handleSuggestedInput} />
            <ChatInput userInput={userInput} setUserInput={setUserInput} sendMessage={sendMessage} />
        </div>
    );
}

export default Chatbot;
