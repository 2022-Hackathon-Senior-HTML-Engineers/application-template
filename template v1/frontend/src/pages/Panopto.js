import CustomPopup from "../components/CustomPopup";
import { useState } from "react"
import { Grid } from "@mui/material";

import Timer from "../components/Timer";


const PanoptoVideo = () => {

    // State for youtube URL -> the thing you put in the brackets in useState() is just the default url it start with (can also be empty "")
    const [currentURL, setCurrentURL] = useState("insert-default-url-here");
    // To view the current URL, access it with currentURL
    // To change the URL playing, use setCurrentURL("insert-new-URL-here");

  return (
    <div className="">
      <div className="">
<Timer/>

    </div>
    </div>
  )
}

export default PanoptoVideo;