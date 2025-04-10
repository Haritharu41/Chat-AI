import React from "react";
import "./DashBoardPage.css";

function DashBoardPage() {
  return (
    <div className="dashboardPage">
      <div className="texts">
        <div className="logo">
          <img src="/chat.png" alt=" " />
          <h1>CHAT AI</h1>
        </div>

        <div className="options">

          <div className="option">
            <img src="/chat.png" alt="" />
            <span>Create a New chat</span>
          </div>
          <div className="option">
            <img src="/image.png" alt="" />
            <span>Analyzee images</span>
          </div>
          <div className="option">
            <img src="/code.png" alt="" />
            <span>Help me with my code</span>
          </div>
        </div>
      </div>
      <div className="formContainer">
        <form action="">
          <input type="text" name="" placeholder="Ask me anything" />
          <button>
            <img src="/arrow.png" alt="" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default DashBoardPage;
