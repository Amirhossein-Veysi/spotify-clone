import React from "react";
import "./Sidebar.css";
//Logo
import Logo from "../../img/spotify-green-logo.png";
//components
import SidebarOption from "../SidebarOption";
//icons
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={Logo} alt="Spotify Logo" className="sidebar-logo" />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Library" Icon={LibraryMusicIcon} />

      <strong className="sidebar-title">PLAYLISTS</strong>
      <hr />

      <SidebarOption title="Rock" />
      <SidebarOption title="R&B" />
    </div>
  );
}

export default Sidebar;
