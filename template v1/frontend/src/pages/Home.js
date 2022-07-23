import { useEffect } from "react"
import CustomPopup from "../components/CustomPopup";
import { useState } from "react"
import { Grid } from "@mui/material";
import Soju from "../images/soju.png"
import Juice from "../images/juice.png"
import MountGay from "../images/mountGay.png"
import RedBull from "../images/redBull.png"



function Home() {
  const [visibility, setVisibility] = useState(false);
  const popupCloseHandler = (e) => {
    setVisibility(e);
  }

  return (
    <div className="home">

      <CustomPopup
        onClose={popupCloseHandler}
        show={visibility}
        title="Drinks"
      >
        <img src={Soju} />
        <img src={Juice} />
        <img src={RedBull} />
        <img src={MountGay} />


      </CustomPopup>
      <button className="drinks-button" onClick={(e) => setVisibility(!visibility)} >What drinks do you want?</button>

    </div >
  );
};
export default Home