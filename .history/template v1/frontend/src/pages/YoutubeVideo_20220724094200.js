import CustomPopup from "../components/CustomPopup";
import { useState } from "react";
import { Grid } from "@mui/material";
import YoutubeEmbed from "../components/YoutubeEmbed";
import ReactPlayer from "react-player";

const YoutubeVideo = () => {
  // State for youtube URL -> the thing you put in the brackets in useState() is just the default url it start with (can also be empty "")
  const [currentURL, setCurrentURL] = useState("insert-default-url-here");
  // To view the current URL, access it with currentURL
  // To change the URL playing, use setCurrentURL("insert-new-URL-here");

  return (
    <div className="youtube-page">
    <Grid container spacing={2}>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid>
      <div className="youtube-content">
        <div className="video-section">
          <div className="player-wrapper">
            <ReactPlayer url="https://www.youtube.com/watch?v=0Fcdln0HjBA&ab_channel=DavidWelch" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideo;
