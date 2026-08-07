import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Phone, Video, MoreHorizontal } from "react-feather";
import "../styles/Chat.css";

function Chat() {
  const { email } = useParams();

  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const fetchUser = async () => {
    const response = await fetch(
      `http://localhost:3000/profile?email=${email}`,
    );

    const data = await response.json();

    if (data.success) {
      setUser(data.user);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchMessages();
  }, [email]);

  const sendMessage = async () => {
    const response = await fetch("http://localhost:3000/send-message", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        sender: localStorage.getItem("email"),
        receiver: email,
        text: message,
      }),
    });

    const data = await response.json();

    console.log(data);

    if (data.success) {
      setMessage("");
      fetchMessages();
    }
  };

  const fetchMessages = async () => {
    const response = await fetch(
      `http://localhost:3000/messages?sender=${localStorage.getItem("email")}&receiver=${email}`,
    );

    const data = await response.json();

    if (data.success) {
      setMessages(data.messages);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchMessages();
    }, 1000);

    return () => clearInterval(interval);
  }, [email]);

  return (
    <div className="chat-page">
      <Sidebar />

      <div className="chat-box">
        <div className="header">
          <div className="user-info">
            <h2>{user?.name}</h2>
            <p>@{user?.username}</p>
          </div>

          <div className="chat-btns">
            <button className="call-btn">
              <Phone color="white" size={30} strokeWidth={1.5} />
            </button>

            <button className="video-btn">
              <Video color="white" size={30} strokeWidth={1.5} />
            </button>

            <button className="video-btn">
              <MoreHorizontal color="white" size={30} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div className="messages">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className={
                msg.sender === localStorage.getItem("email")
                  ? "message sent"
                  : "message received"
              }
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="footer">
          <input
            type="text"
            id="message-field"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button className="send" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
