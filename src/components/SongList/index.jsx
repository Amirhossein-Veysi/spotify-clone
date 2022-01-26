import React from "react";
//css
import "./SongList.css";
//components
import Song from "../SongRow";

function SongList({ songs }) {
  return (
    <div className="song-list">
      {songs.map((song) => {
        <Song />;
      })}
    </div>
  );
}

export default SongList;
