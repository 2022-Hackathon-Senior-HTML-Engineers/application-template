import CustomPopup from "../components/CustomPopup";
import { useState } from "react"
import { Grid } from "@mui/material";
import YoutubeEmbed from "../components/YoutubeEmbed";
import Soju from "../images/popUpDrinks/soju.png"
import Juice from "../images/popUpDrinks/juice.png"
import MountGay from "../images/popUpDrinks/mountGay.png"
import RedBull from "../images/popUpDrinks/redBull.png"
import Corona from "../images/popUpDrinks/corona.png"
import FireBall from "../images/popUpDrinks/fireball.png"
import GingerBeer from "../images/popUpDrinks/gingerBeer.png"
import UpNGo from "../images/popUpDrinks/upngo.png"
import Vodka from "../images/popUpDrinks/vodka.png"
import Tui from "../images/drinks/tui.png"
import { useEffect } from "react"
import { useDrinksContext } from "../hooks/useDrinksContext"

// components
import DrinkDetails from "../components/DrinkDetails"
import DrinkForm from "../components/DrinkForm"

const Home = () => {
  const { drinks, dispatch } = useDrinksContext()
  const [visibility, setVisibility] = useState(false);
  const popupCloseHandler = (e) => {
    setVisibility(e);
  }


  useEffect(() => {
    const fetchDrinks = async () => {
      const response = await fetch('https://localhost:20522/api/drinks')
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_DRINKS', payload: json })
      }
    }

    fetchDrinks()
  }, [dispatch])

  return (
    <div className="home">
      <div className="drinks">
        <YoutubeEmbed embedId="rokGy0huYEA" />

        {drinks && drinks.map(drink => (
          <DrinkDetails drink={drink} key={drink._id} />
        ))}
      </div>
      <DrinkForm />


      <CustomPopup
        onClose={popupCloseHandler}
        show={visibility}
        title="Drinks"
      >
        <img src={Soju} />
        <img src={Juice} />
        <img src={RedBull} />
        <img src={MountGay} />
        <img src={Corona} />
        <img src={FireBall} />
        <img src={GingerBeer} />
        <img src={UpNGo} />
        <img src={Vodka} />
        <img src={Tui} />

      </CustomPopup>
      <button className="drinks-button" onClick={(e) => setVisibility(!visibility)} >What drinks do you want?</button>
    </div>
  )
}

export default Home