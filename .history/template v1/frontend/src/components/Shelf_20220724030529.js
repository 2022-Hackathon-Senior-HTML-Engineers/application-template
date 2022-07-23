import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { useRecoilState } from "recoil";
import { Tooltip } from "@mui/material";
import { useState, useEffect } from "react";

import { currentShelfState } from "../atoms/currentShelfState";
import { itemState } from "../atoms/currentItemState";
import { taskState } from "../atoms/currentTaskState";

import DetailsPopup from "../components/DetailsPopup";
import CustomPopup from "../components/CustomPopup";
import Juice from "../images/popUpDrinks/juice.png";
import MountGay from "../images/popUpDrinks/mountGay.png";

import BackButton from "../images/back-button.png";
import DetailsButton from "../images/details-button.png";
import FinishButton from "../images/finish-button.png";
import LecturesButton from "../images/lectures-button.png";
import ResumeLastVideoButton from "../images/resume-last-video-button.png";
import SetTasksButton from "../images/set-tasks-button.png";
import User from "../images/user.png";
import ProfileButton from "../images/profile-button.png";
import LogOutButton from "../images/log-out-button.png";

import StrawberrySoju from "../images/drinks/strawberry-soju.png";
import AppleSoju from "../images/drinks/apple-soju.png";
import RedBull from "../images/drinks/red-bull.png";
import YakultSoju from "../images/drinks/yakult-soju.png";
import Corona from "../images/popUpDrinks/corona.png";
import FireBall from "../images/popUpDrinks/fireball.png";
import GingerBeer from "../images/popUpDrinks/gingerBeer.png";
import UpNGo from "../images/popUpDrinks/upngo.png";
import Vodka from "../images/popUpDrinks/vodka.png";
import Tui from "../images/drinks/tui.png";
import OriginalSoju from "../images/drinks/original-soju.png";
import GrapeSoju from "../images/drinks/grape-soju.png";
import Pepsi from "../images/drinks/pepsi.png";
import NoDrink from "../images/drinks/no-drink.png";

const Shelf = () => {
  const [currentNavState, setCurrentNavState] =
    useRecoilState(currentShelfState);

  const [currentItemState, setCurrentItemState] = useRecoilState(itemState);

  const [currentTaskState, setCurrentTaskState] = useRecoilState(taskState);

  const [ShelfItemsCollection, setShelfItemsCollection] = useState([4, 2, 1, 0, 1, 3, 4,15,15,15,15,15,15,15,15,15]);
//   const ShelfItemsCollection = [4, 2, 1, 0, 1, 3, 4, 0, 4, 1, 0, 1, 2, 0, 2, 3];
  //   const [ShelfTasksCollection, setShelfTasksCollection] = useState[4, 2, 1, 0, 1, 3, 4, 0, 4, 1, 0, 1, 2, 0, 2, 3];

  const DrinksCollection = [
    { id: 0, name: "Original Soju", imageName: OriginalSoju },
    { id: 1, name: "Grape Soju", imageName: GrapeSoju },
    { id: 2, name: "Strawberry Soju", imageName: StrawberrySoju },
    { id: 3, name: "Apple Soju", imageName: AppleSoju },
    { id: 4, name: "Yakult Soju", imageName: YakultSoju },
    { id: 5, name: "Vodka", imageName: Vodka },
    { id: 6, name: "Tui", imageName: Tui },
    { id: 7, name: "Corona", imageName: Corona },
    { id: 8, name: "MountGay", imageName: MountGay },
    { id: 9, name: "Fireball", imageName: FireBall },
    { id: 10, name: "Pepsi", imageName: Pepsi },
    { id: 11, name: "Red Bull", imageName: RedBull },
    { id: 12, name: "Juice", imageName: Juice },
    { id: 13, name: "Ginger Beer", imageName: GingerBeer },
    { id: 14, name: "Up & Go", imageName: UpNGo },
    { id: 15, name: "No Drink", imageName: NoDrink },
  ];

  const TasksCollection = [
    { id: 0, title: "You hear the lecturer's catch phrase." },
    { id: 1, title: "Survive 20 minutes without having a drink." },
    { id: 2, title: "Learn 3 new concepts." },
    { id: 3, title: "Work with a new equation." },
    {
      id: 4,
      title: 'The lecturer asks "Any questions?" and no questions are asked.',
    },
    { id: 5, title: "The lecturer makes a typo." },
    { id: 6, title: "Go through 10 lecture slides." },
    { id: 7, title: "You hear classroom claps in the background." },
    { id: 8, title: "The professor stutters." },
    { id: 9, title: "Plays a youtube video with less than 60 likes." },
    { id: 10, title: "Repeats the same word at least 3 times in a row." },
    { id: 11, title: "Has a full lag moment." },
    { id: 12, title: "Shit talks another department." },
    { id: 13, title: "Teaches data structures and algorithms." },
    {
      id: 14,
      title: "Has a promotion for something at the start of the lecture.",
    },
    { id: 15, title: "Lecturer forgets to record video. It's audio only." },
    { id: 16, title: "Lecturer forgot to turn up to lecture." },
  ];

  const [visibilityDetails, setVisibilityDetails] = useState(false);
  const [visibilityTasks, setVisibilityTasks] = useState(false);

  const popupCloseDetailsHandler = (e) => {
    setVisibilityDetails(e);
  };

  const popupCloseTasksHandler = (e) => {
    setVisibilityTasks(e);
  };

    // // Peforms action on state update immediately before re-render
    // useEffect(() => {
    //     console.log("WE UPDATING")
    //     //console.log("UPDATED!! current index is now " + currentIndex)
    //   }, [ShelfItemsCollection]);

  //   const removeTask = (e) => {
  //     /* To be implemented */
  //   };

  return (
    <div>
      <div className="shelf-sides">
        <div className="items-window">
          <div className="grid-parent">
            <div className="grid-container">
              {ShelfItemsCollection.map((ShelfItem) => (
                <div
                  className="grid-item"
                  onClick={() => (
                    setCurrentItemState(ShelfItem),
                    setCurrentTaskState(ShelfItem)
                  )}
                >
                  <Tooltip title={<h2>{DrinksCollection[ShelfItem].name}</h2>}>
                    <img
                      src={DrinksCollection[ShelfItem].imageName}
                      className=""
                      alt={DrinksCollection[ShelfItem].name}
                    />
                  </Tooltip>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="machine-bottom">
          {currentNavState ? (
            <>
              <Grid container spacing={0}>
                <Grid item xs={6} md={4}>
                  <div className="nav-left">
                  {console.log(DrinksCollection[currentItemState])}
                    <img
                      src={DrinksCollection[currentItemState].imageName}
                      className=""
                      alt="SDJKF"
                    />
                  </div>
                </Grid>
                <Grid item xs={6} md={8}>
                  <div className="nav-right">
                    <img
                      src={BackButton}
                      className="back-button"
                      onClick={(e) => setCurrentNavState(!currentNavState)}
                    />
                    <img src={FinishButton} className="finish-button" />
                    <div className="task-box">
                      <h5 style={{ marginTop: "4px", marginBottom: "4px" }}>
                        {TasksCollection[currentTaskState].title}
                      </h5>
                    </div>

                    <img
                      src={DetailsButton}
                      className="details-button"
                      onClick={(e) => setVisibilityDetails(!visibilityDetails)}
                    />
                  </div>
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              <div>
                <Grid container spacing={0}>
                  <Grid item xs={6} md={4}>
                    <div className="nav-left-2">
                      <img src={User} className="" />
                      <br />
                      <img src={ProfileButton} className="nav-button" />
                      <br />
                      <img src={LogOutButton} className="nav-button" />
                    </div>
                  </Grid>
                  <Grid item xs={6} md={8}>
                    <div className="nav-right-2">
                      <img src={LecturesButton} className="nav-button" />
                      <img
                        src={SetTasksButton}
                        className="nav-button"
                        onClick={(e) => setVisibilityTasks(!visibilityTasks)}
                      />
                      <img
                        src={ResumeLastVideoButton}
                        className="nav-button"
                        onClick={(e) => setCurrentNavState(!currentNavState)}
                      />
                    </div>
                  </Grid>
                </Grid>
              </div>
            </>
          )}
        </div>
      </div>

      <CustomPopup
        onClose={popupCloseDetailsHandler}
        show={visibilityDetails}
        title="Details"
      >
        <img src={StrawberrySoju} className="grid-item" />
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

      <DetailsPopup
        onClose={popupCloseTasksHandler}
        show={visibilityTasks}
        title="Set Tasks"
      >
        <div></div>
        <div className="drinks-list">
          <div className="grid-container-drinks-list">
            {DrinksCollection.slice(0, 15).map((Drink) => (
                
              <div
                className="grid-item"
                // onClick={() => (ShelfItemsCollection.pop(),console.log("removed"),ShelfItemsCollection.unshift(Drink.id),console.log("added "+ Drink.id.toString())
                // )}
              >
                <Tooltip title={<h2>{Drink.name}</h2>}>
                  <img
                    src={Drink.imageName}
                    className=""
                    alt={Drink.name}
                  />
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
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
