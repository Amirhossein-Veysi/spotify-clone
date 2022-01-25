import React from "react";
//css
import "./Header.css";
//icons
import SearchIcon from "@mui/icons-material/Search";
//mui
import Avatar from "@mui/material/Avatar";
//redux
import { useDataLayerValue } from "../DataLayer";

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <div className="left">
        <SearchIcon />
        <input type="text" placeholder="Search for Artists, Songs..." />
      </div>
      <div className="right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
