import CustomPopup from "../components/CustomPopup";
import { useState } from "react"
import { Grid } from "@mui/material";
import YoutubeEmbed from "../components/YoutubeEmbed";
import ReactPlayer from 'react-player'


const YoutubeVideo = () => {

    // State for youtube URL -> the thing you put in the brackets in useState() is just the default url it start with (can also be empty "")
    const [currentURL, setCurrentURL] = useState("insert-default-url-here");
    // To view the current URL, access it with currentURL
    // To change the URL playing, use setCurrentURL("insert-new-URL-here");

  return (
    <div className="">
      <div className="">

      <ReactPlayer url='https://auckland.au.panopto.com/Panopto/Pages/Embed.aspx?id=b02784f7-f51f-426b-95eb-aed700330751' />


    </div>
    </div>
  )
}

export default YoutubeVideo;