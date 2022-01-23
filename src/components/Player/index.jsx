import React from "react";
import "./Player.css";
//components
import Sidebar from "../Sidebar";
import Body from "../Body";
import Footer from "../Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player-body">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default Player;