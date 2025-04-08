import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

function HomePage() {
  return (
    <div className="Home">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>CHAT AI</h1>
        <h2>Supper charge your creativity and porductivity</h2>
        <h3>
          Chat AI is a powerful tool that helps you generate ideas, write
          content, and brainstorm solutions.
        </h3>

        <Link>Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img src="/bot.png" alt="" />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "We produce food for Mice",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "We produce food for Hamsters",
                1000,
                "We produce food for Guinea Pigs",
                1000,
                "We produce food for Chinchillas",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
