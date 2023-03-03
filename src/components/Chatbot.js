import React, { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    const messageText = e.target.message.value;
    setMessages([...messages, { text: messageText, isUser: true }]);
    // clear input
    e.target.reset();
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="h-screen flex flex-col justify-between dark:bg-gray-900">
        <div className="border p-4 flex flex-row items-center rounded-md  dark:bg-gray-800 dark:text-white dark:border-gray-700">
          <p>Chatterbox</p>
          {/* TODO: Add a toggle */}
          <button onClick={toggleDarkMode}>
            {darkMode ? "Light mode" : "Dark mode"}
          </button>
        </div>
        <div className="h-full rounded-md p-4 flex flex-col justify-end">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${
                message.isUser
                  ? "bg-blue-500 text-white w-6/12 self-end"
                  : "bg-gray-200 self-start"
              } mb-2 p-2 rounded-md`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <form
          onSubmit={handleMessageSubmit}
          action="POST"
          className="border rounded-md p-4 flex flex-row items-center dark:bg-gray-700 dark:border-gray-700"
        >
          <textarea
            type="text"
            name="message"
            className="border rounded-md px-4 py-2 w-full h-10 resize-none dark:bg-gray-800 dark:text-white"
            placeholder="Type in your text here :)"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-md h-full dark:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
