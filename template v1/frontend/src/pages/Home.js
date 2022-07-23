import CustomPopup from "../components/CustomPopup";
import { useState } from "react"
import { Grid } from "@mui/material";
import Soju from "../images/soju.png"
import Juice from "../images/juice.png"
import MountGay from "../images/mountGay.png"
import RedBull from "../images/redBull.png"
import YoutubeEmbed from "../components/YoutubeEmbed";

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
      const response = await fetch('/api/drinks')
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


      </CustomPopup>
      <button className="drinks-button" onClick={(e) => setVisibility(!visibility)} >What drinks do you want?</button>
    </div>
  )
}

export default Home