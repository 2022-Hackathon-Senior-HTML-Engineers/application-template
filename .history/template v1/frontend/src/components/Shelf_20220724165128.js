import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { useRecoilState } from "recoil";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import { useReward } from 'react-rewards';

import { currentShelfState } from "../atoms/currentShelfState";
import { itemState } from "../atoms/currentItemState";
import { taskState } from "../atoms/currentTaskState";
import DrinksCollection from "../data/DrinksCollection";
import TasksCollection from "../data/TasksCollection";

import TasksPopup from "../components/DetailsPopup";
import CustomPopup from "../components/CustomPopup";
import ProfilePopup from "../components/ProfilePopup";
import LogoutPopup from "../components/LogoutPopup";
import AllTasksPopup from "../components/AllTasksPopup";

import BackButton from "../images/back-button.png";
import DetailsButton from "../images/details-button.png";
import FinishButton from "../images/finish-button.png";
import ResumeLastVideoButton from "../images/resume-last-video-button.png";
import SetTasksButton from "../images/set-tasks-button.png";
import User from "../images/user.png";
import BigUser from "../images/big-user.png";
import ProfileButton from "../images/profile-button.png";
import LogOutButton from "../images/log-out-button.png";
import ViewAllTasksButton from "../images/view-all-tasks-button.png";

//Profile Popup
import DrinksGif from "../images/drinks-gif.gif";

const Shelf = () => {
  const [currentNavState, setCurrentNavState] =
    useRecoilState(currentShelfState);
  const [currentDrinkState, setCurrentDrinkState] = useRecoilState(itemState);
  const [currentTaskState, setCurrentTaskState] = useRecoilState(taskState);

  const [itemPosition, setItemPosition] = useState(0);
  const [currentSelection, setCurrentSelection] = useState([0, 0]);
  const [onDisplay, setOnDisplay] = useState([
    [11, 16],
    [4, 17],
    [17, 15],
    [17, 15],
    [17, 15],
    [17, 15],
    [17, 15],
    [17, 15],
    [17, 15],
    [17, 15],
    [17, 15],
    [17, 15],
    [17, 15],
    [17, 15],
    [17, 15],
    [17, 15],
  ]);

  const { reward: confettiReward, isAnimating: isConfettiAnimating } = useReward('confettiReward', 'confetti');
  const { reward: balloonsReward, isAnimating: isBalloonsAnimating } = useReward('balloonsReward', 'balloons');


  const [visibilityAllTasks, setVisibilityAllTasks] = useState(false);
  const [visibilityTasks, setVisibilityTasks] = useState(false);
  const [visibilityProfile, setVisibilityProfile] = useState(false);
  const [visibilityLogout, setVisibilityLogout] = useState(false);

  const popupCloseAllTasksHandler = (e) => {
    setVisibilityAllTasks(e);
  };


  const popupCloseTasksHandler = (e) => {
    setVisibilityTasks(e);
  };

  const popupCloseProfileHandler = (e) => {
    setVisibilityProfile(e);
  };

  const popupCloseLogoutHandler = (e) => {
    setVisibilityLogout(e);
  };

  return (
    <div>
      <div className="shelf-sides">
        <div className="items-window">
          <div className="grid-parent">
            <div className="grid-container">
              {onDisplay.map((DisplayItem, i) => (
                <div
                  className="grid-item"
                  onClick={() => (
                    setCurrentTaskState(DisplayItem[0]),
                    setCurrentDrinkState(DisplayItem[1]),
                    setItemPosition(i)
                  )}
                >
                  <Tooltip
                    title={<h2>{DrinksCollection[DisplayItem[1]].name}</h2>}
                  >
                    <img
                      src={DrinksCollection[DisplayItem[1]].imageName}
                      className=""
                      alt={DrinksCollection[DisplayItem[1]].name}
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
                    <img
                      src={DrinksCollection[currentDrinkState].imageName}
                      className=""
                      alt="item"
                    />
                  </div>
                </Grid>
                <Grid item xs={6} md={8}>
                  <div className="nav-right">
                    <Link to="/">
                      <img
                        src={BackButton}
                        className="back-button"
                        onClick={(e) => setCurrentNavState(!currentNavState)}
                      />
                    </Link>

                    <div id="balloonsReward">
                      <div id="confettiReward">
                        <img
                          disabled={isConfettiAnimating || isBalloonsAnimating} src={FinishButton}
                          className="finish-button"
                          onClick={() => {
                            confettiReward();
                            balloonsReward();

                            setOnDisplay(
                              [].concat(
                                onDisplay.slice(0, itemPosition),
                                onDisplay.slice(itemPosition + 1, 16),
                                [[17, 15]]
                              )
                            )
                          }
                          }
                        />
                      </div>
                    </div>
                    <div className="task-box">
                      <h5 style={{ marginTop: "4px", marginBottom: "4px" }}>
                        {TasksCollection[[currentTaskState]].title}
                      </h5>
                    </div>
                                          <img
                        src={ViewAllTasksButton}
                        className="nav-button"
                        onClick={(e) =>
                          setVisibilityAllTasks(!visibilityAllTasks)
                        }
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
                      <img
                        src={ProfileButton}
                        className="nav-button"
                        onClick={(e) =>
                          setVisibilityProfile(!visibilityProfile)
                        }
                      />
                      <br />
                      <img
                        src={LogOutButton}
                        className="nav-button"
                        onClick={(e) => setVisibilityLogout(!visibilityLogout)}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={6} md={8}>
                    <div className="nav-right-2">
                      <img
                        src={ViewAllTasksButton}
                        className="nav-button"
                        onClick={(e) =>
                          setVisibilityAllTasks(!visibilityAllTasks)
                        }
                      />
                      <img
                        src={SetTasksButton}
                        className="nav-button"
                        onClick={(e) => setVisibilityTasks(!visibilityTasks)}
                      />
                      <Link to="/player">
                        <img
                          src={ResumeLastVideoButton}
                          className="nav-button"
                          onClick={(e) => setCurrentNavState(!currentNavState)}
                        />
                      </Link>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </>
          )}
        </div>
      </div>

      <ProfilePopup
        onClose={popupCloseProfileHandler}
        show={visibilityProfile}
        title="Profile"
      >
        <div>
          <br />
          <h3>We ship Steven x Daniel 😇😋</h3>
          <br />
          <img src={BigUser} className="user" />
          <br />
          <h3>Looking good today, you got no need to change your profile.</h3>
        </div>
      </ProfilePopup>

      <LogoutPopup
        onClose={popupCloseLogoutHandler}
        show={visibilityLogout}
        title="Log Out"
      >
        <div>
          <br />
          <h3>You haven't had enough drinks yet!</h3><br />
          <h3>Finish your drinks first and then log off! 😊</h3>
          <img src={DrinksGif} className="drinks-gif" />
        </div>
      </LogoutPopup>

      <TasksPopup onClose={popupCloseTasksHandler} show={visibilityTasks}>
        <div>
          <h3>
            Choose a task, then choose a drink you'll have when you tick the
            task off!
          </h3>
          <Grid container spacing={0}>
            <Grid item xs={6} md={6}>
              <div className="pick-task-container">
                <div className="pick-task-content">
                  {" "}
                  {TasksCollection.slice(0, 17).map((Task, i) => (
                    <div
                      className="pick-task-item"
                      onClick={() =>
                        setCurrentSelection([i].concat(currentSelection[1]))
                      }
                    >
                      <p>{Task.title}</p>
                    </div>
                  ))}
                </div>
                <h4>Currently selected task:</h4>
                <h5>{TasksCollection[currentSelection[0]].title}</h5>
              </div>
            </Grid>
            <Grid item xs={6} md={6}>
              <div className="pick-drink-container">
                <div className="pick-drink-content">
                  <div className="grid-container-drinks-list">
                    {DrinksCollection.slice(0, 15).map((Drink, i) => (
                      <div
                        className="grid-item"
                        onClick={() =>
                          setCurrentSelection(
                            [].concat(currentSelection[0], [i])
                          )
                        }
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
                <h4>Currently selected drink:</h4>
                <h5>{DrinksCollection[currentSelection[1]].name}</h5>
              </div>
            </Grid>
          </Grid>
          <img
            src={SetTasksButton}
            className="nav-button"
            alt="Add new task button"
            onClick={() =>
              setOnDisplay(
                [].concat([currentSelection], onDisplay.slice(0, 15))
              )
            }
          />
        </div>
      </TasksPopup>

      <AllTasksPopup
        onClose={popupCloseAllTasksHandler}
        show={visibilityAllTasks}
        title="All Current Tasks"
      >
        <div>
          <div className="pick-task-content">
            {" "}
            {onDisplay.map((Task, i) => (
              <div>
                {(() => {
                  if (Task[0] != 17) {
                    return (
                      <div className="pick-task-item">
                        <p>{TasksCollection[Task[0]].title}</p>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })()}
              </div>
            ))}
          </div>
        </div>
      </AllTasksPopup>
    </div>
  );
};

export default Shelf;