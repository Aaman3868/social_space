import React, { useState } from "react";

function Chatbot() {
  const [friends] = useState([
    { id: 1, name: "Aman" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Priya" },
    { id: 4, name: "Sofia" },
  ]);

  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! This is the chat area." },
  ]);
  const [input, setInput] = useState("");
  const [activeFriend, setActiveFriend] = useState(friends[0]);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setInput("");

    // Simulate bot reply
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: "Got it!" }]);
    }, 500);
  };

  return (
    <div className="container mt-2">
      <div className="row border rounded shadow-sm" style={{ height: "500px" }}>
        
        {/* Left Side - Friend List */}
        <div className="col-md-3 border-end p-0">
          <div className="bg-primary text-white p-2">
            <h5 className="mb-0">Friends</h5>
          </div>
          <div style={{ overflowY: "auto", height: "calc(100% - 45px)" }}>
            {friends.map((friend) => (
              <div
                key={friend.id}
                className={`p-2 border-bottom ${
                  activeFriend.id === friend.id ? "bg-light" : ""
                }`}
                style={{ cursor: "pointer" }}
                onClick={() => setActiveFriend(friend)}
              >
                {friend.name}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Chatbox */}
        <div className="col-md-9 p-0 d-flex flex-column">
          <div className="bg-light p-2 border-bottom">
            <strong>Chat with {activeFriend.name}</strong>
          </div>

          {/* Messages Area */}
          <div
            className="flex-grow-1 p-3"
            style={{ overflowY: "auto", backgroundColor: "#f8f9fa" }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`d-flex mb-2 ${
                  msg.sender === "user" ? "justify-content-end" : "justify-content-start"
                }`}
              >
                <div
                  className={`p-2 rounded ${
                    msg.sender === "user"
                      ? "bg-primary text-white"
                      : "bg-white border"
                  }`}
                  style={{ maxWidth: "70%" }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-2 border-top d-flex">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button className="btn btn-primary" onClick={handleSend}>
              Send
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Chatbot;
