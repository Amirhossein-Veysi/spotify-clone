import React from "react";
import "./Footer.css";
//icons
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
//mui
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";

function Footer() {
  return (
    <div className="footer">
      <div className="left">
        <img src="" alt="" className="album-logo" />
        <div className="info">
          <h4>dsfdsf</h4>
          <p>fdsfoj</p>
        </div>
      </div>
      <div className="center">
        <ShuffleIcon className="icon" />
        <SkipPreviousIcon className="icon" />
        <PlayCircleOutlineIcon className="icon" />
        <SkipNextIcon className="icon" />
        <RepeatIcon className="icon" />
      </div>
      <div className="right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon className="icon" />
          </Grid>
          <Grid item>
            <VolumeDownIcon className="icon" />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
