import "../styles/messageDisplay.scss";
import { AiOutlineAlert } from "react-icons/ai";

const MessageDisplay = ({ message, onClose }) => {
  return (
    <div className="message-display glassmorphism">
      <div>
        <div className="iconContainer">
            <AiOutlineAlert fontSize={24} color="#fff" />
        </div>
        <p>{message}</p>
      </div>
      <button className="solid" onClick={onClose}>
        <p>Close</p>
      </button>
    </div>
  );
};

export default MessageDisplay;
