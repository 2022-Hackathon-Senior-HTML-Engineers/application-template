import CustomPopup from "../components/CustomPopup";
import { useState } from "react";
import { Grid } from "@mui/material";
import ReactPlayer from "react-player";

import DrawingPad from "../components/DrawingBoard";

import ViewAllTasksButton from "../images/view-all-tasks-button.png";

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
              <ReactPlayer url="https://www.youtube.com/watch?v=0Fcdln0HjBA&ab_channel=DavidWelch" />
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="video-info-wrapper">
            {" "}
            <div className="video-title-section">
              <h4>
                Currently watching: AofA Lecture 28: Running time for Dijkstra and when Dijkstra
                fails
              </h4>
              <h5>
                You can keep track of your progress through the tasks using the
                notepad, drawing pad, and stopwatch!
              </h5>
              <br />
            </div>
          </div>
        </Grid>
      </Grid>
      <div className="video-bottom-half">
        <Grid container spacing={2}>
          <Grid item xs={4}>
          <div className="notepad-title"><h3>Notepad</h3></div>
          
            <div className="notepad-section">
              <textarea rows="10" cols="28" className="text-input-section">
                Hello! Feel free to type up any notes here!
              </textarea>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="drawing-pad-section">
            <h3>Drawing Pad</h3>
              <DrawingPad />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="stopwatch-section">
            <h3>Stopwatch</h3>
              <h2>Add stopwatch here</h2>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default YoutubeVideo;
