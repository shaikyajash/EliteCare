import React, { useEffect, useState, useRef, useContext } from "react";
import {
  FiMoreVertical,
  FiArrowLeft,
  FiPaperclip,
  FiSend,
  FiMessageSquare,
} from "react-icons/fi";
const Bubble = ({ text, time, index, image }) => {
  const alignmentClass = index % 2 === 0 ? "justify-start" : "justify-end";

  return (
    <div className={`flex items-center gap-2 ${alignmentClass}`}>
      <div className="flex items-start ">
        {index % 2 === 0 && (
          <button className="m-1 p-2 bg-[#ed4d4d] rounded-xl text-sm hover:bg-slate-300"></button>
        )}
        <div className="bg-[#e6e6e6] p-2 m-2 rounded-xl">
          {image && <img src={image} alt="image" className="w-40" />}
          <p className="max-w-[40vw]">{text}</p>
          <p className="text-xs text-end">{time}</p>
        </div>
      </div>
    </div>
  );
};

function Bot() {
  const [isOpen, setIsOpen] = useState(true);
  const [chatMessages, setChatMessages] = useState(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(chatMessages));
  }, [chatMessages]);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [chatMessages]);

  const [newMessage, setNewMessage] = useState({
    text: "",
    time: "",
    image: "",
  });
  const sendMessage = async () => {
    newMessage.time = new Date().toLocaleTimeString();
    setChatMessages([...chatMessages, newMessage]);
    setNewMessage({ text: "" });
  };

  const handlePicker = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.onchange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        newMessage.image = reader.result;
        sendMessage();
      };
    };
    input.click();
  };
  const Pop = () => {
    return (
      <div>
        <button onClick={handlePicker} className="bg-red-500 rounded-full p-2">
          <FiPaperclip />
        </button>
      </div>
    );
  };

  return (
    <>
      {isOpen ? (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" bg-red-500 h-[60px] w-[60px] rounded-full
          text-white flex items-center justify-center text-3xl"
        >
          <FiMessageSquare />
        </button>
      ) : (
        <div className=" w-[450px] bg-white shadow-lg shadow-black rounded-xl">
          <div className="flex items-center justify-between border-b border-black p-2">
            <div className="flex items-center gap-2">
              <FiArrowLeft onClick={() => setIsOpen(!isOpen)} />
              <div className="bg-red-500 rounded-full h-8 w-8"></div>
              <p className="text-xl">Bot</p>
            </div>
            <FiMoreVertical />
          </div>
          <div className="flex flex-col overflow-y-auto h-[calc(80vh)] bg-gray-100 p-4">
            {chatMessages.map((message, index) => (
              <Bubble
                key={index}
                text={message.text}
                time={message.time}
                image={message.image}
                index={index}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex flex-row items-center justify-between p-2">
            <Pop />
            <input
              type="text"
              placeholder="Enter here..."
              value={newMessage.text}
              onChange={(e) => setNewMessage({ text: e.target.value })}
              className="w-full p-2 rounded mx-2 bg-[#efefef]"
            />
            <button
              onClick={sendMessage}
              className="bg-red-500 p-2 rounded-full"
            >
              <FiSend />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Bot;
