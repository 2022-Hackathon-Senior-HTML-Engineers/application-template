import CustomPopup from "../components/CustomPopup";
import { useState } from "react";
import { Grid } from "@mui/material";
import Soju from "../images/popUpDrinks/soju.png";
import Juice from "../images/popUpDrinks/juice.png";
import MountGay from "../images/popUpDrinks/mountGay.png";
import RedBull from "../images/popUpDrinks/redBull.png";
import Corona from "../images/popUpDrinks/corona.png";
import FireBall from "../images/popUpDrinks/fireball.png";
import GingerBeer from "../images/popUpDrinks/gingerBeer.png";
import UpNGo from "../images/popUpDrinks/upngo.png";
import Vodka from "../images/popUpDrinks/vodka.png";
import Tui from "../images/drinks/tui.png";
import { useEffect } from "react";
import { useDrinksContext } from "../hooks/useDrinksContext";
import PanoptoButton from "../images/panopto-button.png";
import YoutubeButton from "../images/youtube-button.png";

//Profile Popup
import DrinksGif2 from "../images/drinks-gif-2.gif";

// components
import DrinkDetails from "../components/DrinkDetails";
import DrinkForm from "../components/DrinkForm";

const Home = () => {
  // const { drinks, dispatch } = useDrinksContext()
  const [visibility, setVisibility] = useState(false);
  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  // useEffect(() => {
  //   const fetchDrinks = async () => {
  //     const response = await fetch('https://localhost:20522/api/drinks')
  //     const json = await response.json()

  //     if (response.ok) {
  //       dispatch({ type: 'SET_DRINKS', payload: json })
  //     }
  //   }

  //   fetchDrinks()
  // }, [dispatch])

  return (
    <div className="">
      <div className="">
        {/* <YoutubeEmbed embedId="rokGy0huYEA" /> */}

        {/* {drinks && drinks.map(drink => (
          <DrinkDetails drink={drink} key={drink._id} />
        ))} */}
      </div>
      {/* <DrinkForm /> */}

      <div className="home-top-half">
        <div className="center-drinks">
          <img src={DrinksGif2} className="beer-gif" />
          <h1 style={{ fontSize: "8vh" }}>Beverage Binge</h1>
        </div>
      </div>

      <div className="home-bottom-half">
        <div className="homepage-buttons">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div>
                <img src={PanoptoButton} />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div>
                <img src={YoutubeButton} />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      <CustomPopup onClose={popupCloseHandler} show={visibility} title="Drinks">
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
      <button
        className="drinks-button"
        onClick={(e) => setVisibility(!visibility)}
      >
        What drinks do you want?
      </button>
    </div>
  );
};

export default Home;
