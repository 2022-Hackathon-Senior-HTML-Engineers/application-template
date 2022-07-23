import CustomPopup from "../components/CustomPopup";
import { useState } from "react"
import { Grid } from "@mui/material";
import YoutubeEmbed from "../components/YoutubeEmbed";


const YoutubeVideo = () => {

  return (
    <div className="">
      <div className="">

      <CustomPopup
        onClose={popupCloseHandler}
        show={visibility}
        title="Drinks"
      >
        <img src={Soju} className="grid-item" />
        <img src={Juice} className="grid-item" />
        <img src={RedBull} className="grid-item" />
        <img src={MountGay} className="grid-item" />
        <img src={Corona} className="grid-item" />
        <img src={FireBall} className="grid-item" />
        <img src={GingerBeer} className="grid-item" />
        <img src={UpNGo} className="grid-item" />
        <img src={Vodka} className="grid-item" />
        <img src={Tui} className="grid-item" />

      </CustomPopup>
      <button className="drinks-button" onClick={(e) => setVisibility(!visibility)} >What drinks do you want?</button>
    </div>
    </div>
  )
}

export default YoutubeVideo;