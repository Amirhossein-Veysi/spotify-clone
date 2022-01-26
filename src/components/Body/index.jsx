import React from "react";
import "./Body.css";
//components
import Header from "../Header";
import Banner from "../Banner";
import SongList from "../SongList";
//redux
import { useDataLayerValue } from "../DataLayer";

function Body() {
  const [{ tracks }, dispatch] = useDataLayerValue();
  return (
    <div className="body">
      <Header />
      <Banner />
      <SongList songs={tracks} />
    </div>
  );
}

export default Body;
