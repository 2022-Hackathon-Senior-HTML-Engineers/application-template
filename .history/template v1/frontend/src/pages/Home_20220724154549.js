import CustomPopup from "../components/CustomPopup";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

import PanoptoButton from "../images/panopto-button.png";
import YoutubeButton from "../images/youtube-button.png";
import Logo from "../images/Logo/LOGO.png";

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
          <br />
          <br />
          <h2
            style={{ color: "white", paddingLeft: "15%", paddingRight: "15%" }}
          >
            Turning lectures into drinking games!
          </h2>
        </div>
      </div>

      <div className="home-bottom-half">
        <div className="homepage-buttons">
          <Grid container spacing={2}>
            <Link to="/player">
              <Grid item xs={6}>
                <div>
                  <img
                    src={PanoptoButton}
                    className="nav-button center-me-please"
                  />
                </div>
              </Grid>
            </Link>
            <Link to="/player">
              <Grid item xs={6}>
                <div>
                  <img
                    src={YoutubeButton}
                    className="nav-button center-me-please"
                  />
                </div>
              </Grid>
            </Link>
          </Grid>
        </div>
      </div>

      {/* <CustomPopup onClose={popupCloseHandler} show={visibility} title="Drinks">

      </CustomPopup> */}
      <img src={Logo} className="drinks-button" />
    </div>
  );
};

export default Home;
