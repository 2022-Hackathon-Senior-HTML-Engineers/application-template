import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { useRecoilState } from "recoil";

import { currentShelfState } from "../atoms/currentShelfState";

import DetailsPopup from "../components/DetailsPopup";
import { useState } from "react";
import Soju from "../images/popUpDrinks/soju.png";
import Juice from "../images/popUpDrinks/juice.png";
import MountGay from "../images/popUpDrinks/mountGay.png";

import BackButton from "../images/back-button.png";
import DetailsButton from "../images/details-button.png";
import FinishButton from "../images/finish-button.png";

import StrawberrySoju from "../images/drinks/strawberry-soju.png";
import AppleSoju from "../images/drinks/apple-soju.png";
import RedBull from "../images/drinks/red-bull.png";
import YakultSoju from "../images/drinks/yakult-soju.png";
import Corona from "../images/popUpDrinks/corona.png"
import FireBall from "../images/popUpDrinks/fireball.png"
import GingerBeer from "../images/popUpDrinks/gingerBeer.png"
import UpNGo from "../images/popUpDrinks/upngo.png"
import Vodka from "../images/popUpDrinks/vodka.png"
import Tui from "../images/drinks/tui.png"

const Shelf = () => {
  const [currentNavState, setCurrentNavState] =
    useRecoilState(currentShelfState);

  const ShelfItemsCollection = [4, 2, 1, 0, 1, 3, 4, 0, 4, 1, 0, 1, 2, 0, 2, 3];
  const ShelfTasksCollection = [4, 2, 1, 0, 1, 3, 4, 0, 4, 1, 0, 1, 2, 0, 2, 3];

  const DrinksCollection = [
    { id: 0, name: "Strawberry Soju", imageName: StrawberrySoju },
    { id: 1, name: "Apple Soju", imageName: AppleSoju },
    { id: 2, name: "Red Bull", imageName: RedBull },
    { id: 3, name: "Yakult Soju", imageName: YakultSoju },
    { id: 4, name: "Tui", imageName: Tui },
  ];



  const [visibility, setVisibility] = useState(false);
  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  return (
    <div>
      <div className="shelf-sides">
        <div className="items-window">
          <div className="grid-parent">
            <div className="grid-container">
              {ShelfItemsCollection.map((ShelfItem) => (
                <div className="grid-item">
                  <img
                    src={DrinksCollection[ShelfItem].imageName}
                    className=""
                    alt={DrinksCollection[ShelfItem].name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="machine-bottom">
          <Grid container spacing={0}>
            <Grid item xs={6} md={4}>
              <div className="nav-left">
              <img
                    src={StrawberrySoju}
                    className=""
                    alt="SDJKF"
                  />
              </div>
            </Grid>
            <Grid item xs={6} md={8}>
              <div className="nav-right">
                <img src={BackButton} className="back-button" />
                <img src={FinishButton} className="finish-button" />
                <div className="task-box">
                  <h4 style={{ "margin-top": "8px", "margin-bottom": "8px" }}>
                    YOUR CURRENT TASK HERE
                  </h4>
                </div>

                <img
                  src={DetailsButton}
                  className="details-button"
                  onClick={(e) => setVisibility(!visibility)}
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      <DetailsPopup
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

      </DetailsPopup>
    </div>
  );
};

export default Shelf;

// <div className="grid-parent">
// <div className="grid-container">
//   <div className="grid-item">
//     <img src={StrawberrySoju} className="" />
//   </div>
//   <div className="grid-item">
//     {" "}
//     <div className="grid-item">
//       <img src={AppleSoju} className="" />
//     </div>
//   </div>
//   <div className="grid-item">
//     {" "}
//     <div className="grid-item">
//       <img src={AppleSoju} className="" />
//     </div>
//   </div>
//   <div className="grid-item">
//     {" "}
//     <div className="grid-item">
//       <img src={StrawberrySoju} className="" />
//     </div>
//   </div>

//   <div className="grid-item">
//     {" "}
//     <div className="grid-item">
//       <img src={StrawberrySoju} className="" />
//     </div>
//   </div>
//   <div className="grid-item">
//     {" "}
//     <div className="grid-item">
//       <img src={StrawberrySoju} className="" />
//     </div>
//   </div>
//   <div className="grid-item">
//     {" "}
//     <div className="grid-item">
//       <img src={StrawberrySoju} className="" />
//     </div>
//   </div>
//   <div className="grid-item">
//     {" "}
//     <div className="grid-item">
//       <img src={AppleSoju} className="" />
//     </div>
//   </div>
// </div>

// <div className="grid-container">
//   <div className="grid-item">
//     <img src={AppleSoju} className="" />
//   </div>
//   <div className="grid-item">2</div>
//   <div className="grid-item">3</div>
//   <div className="grid-item">4</div>
// </div>

// <div className="grid-container">
//   <div className="grid-item">1</div>
//   <div className="grid-item">2</div>
//   <div className="grid-item">3</div>
//   <div className="grid-item">4</div>
// </div>
// </div>
