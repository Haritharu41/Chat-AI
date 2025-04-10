import React from "react";
import { Link } from "react-router-dom";
import "./ChatList.css";
function ChatList() {
  return (
    <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link to="/">Create a new Chat</Link>
      <Link to="/">Explore CHAT AI</Link>
      <Link to="/">Contact </Link>
      <hr />
      <span className="title">RECENT CHAT</span>
      <div className="list">
        <Link to="/"> My chat title </Link>
        <Link to="/"> My chat title </Link>
        <Link to="/"> My chat title </Link>
        <Link to="/"> My chat title </Link>
        <Link to="/"> My chat title </Link>
        <Link to="/"> My chat title </Link>
        <Link to="/"> My chat title </Link>
        <Link to="/"> My chat title </Link>
        <Link to="/"> My chat title </Link>
        <Link to="/"> My chat title </Link>
        <Link to="/"> My chat title </Link>
        <Link to="/"> My chat title </Link>
        <Link to="/"> My chat title </Link>
        <Link to="/"> My chat title </Link>
        <Link to="/"> My chat title </Link>
        <Link to="/"> My chat title </Link>
        <Link to="/"> My chat title </Link>
        <Link to="/"> My chat title </Link>
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
          <span>Upgrade to Chat AI Pro</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  );
}

export default ChatList;
