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
          <div className="youtube-content">
            <div className="video-section">
              <div className="player-wrapper">
                {/* <ReactPlayer url="https://www.youtube.com/watch?v=0Fcdln0HjBA&ab_channel=DavidWelch" height="90%" width="90%" /> */}
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="video-title-section">
            <h3>You're currently watching:</h3>
            <br />
            <h2>
              AofA Lecture 28: Running time for Dijkstra and when Dijkstra fails
            </h2>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default YoutubeVideo;
