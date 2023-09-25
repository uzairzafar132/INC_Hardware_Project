import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

const socket = io.connect("http://localhost:8080/");

function Chatbot() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const [Sopen, setSopen] = useState(false);

  const handleSOpen = () => {
    setSopen(true);
  };
  

  useEffect(() => {
    // Add event listener for "response" event from server
    socket.on("response", (data) => {
      
      
      setOutput((prev) => {
        if (!prev.includes(data)) {
          return [...prev, data];
        } else {
          return prev;
        }
      });
      setSopen(true);
    });
  }, []);

  const messagesEndRef = useRef(null);
  useEffect(() => {
    // Scroll to bottom of div whenever new data is added
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [output]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send user input to server
    socket.emit("message", input);
    setOutput((prev) => [...prev, `You: ${input}`]);
    setInput("");
  };
  console.log(output);

  return (
    <div>
      <IconButton onClick={handleSOpen}>
        <ChatRoundedIcon
          style={{ position: "", top: "px", bottom: "100px", right: "260px" }}
        />
      </IconButton>
      <div>
        {output.map((msg, index) => (
          <div
            style={{
              color: msg.includes("admin") ? "brown" : "",
              paddingLeft: "20px",
            }}
            key={index}
          >
            {msg}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {Sopen && (
        <form style={{ position: "" }} onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue="Small"
            variant="filled"
            size="small"
          />

          <IconButton type="submit">
            <SendIcon />
          </IconButton>
        </form>
      )}
    </div>
  );
}

export default Chatbot;
