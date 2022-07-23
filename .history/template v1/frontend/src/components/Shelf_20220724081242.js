import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { useRecoilState } from "recoil";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import { currentShelfState } from "../atoms/currentShelfState";
import { itemState } from "../atoms/currentItemState";
import { taskState } from "../atoms/currentTaskState";
import DrinksCollection from "../data/DrinksCollection";
import TasksCollection from "../data/TasksCollection";

import TasksPopup from "../components/DetailsPopup";
import CustomPopup from "../components/CustomPopup";

import BackButton from "../images/back-button.png";
import DetailsButton from "../images/details-button.png";
import FinishButton from "../images/finish-button.png";
import LecturesButton from "../images/lectures-button.png";
import ResumeLastVideoButton from "../images/resume-last-video-button.png";
import SetTasksButton from "../images/set-tasks-button.png";
import User from "../images/user.png";
import ProfileButton from "../images/profile-button.png";
import LogOutButton from "../images/log-out-button.png";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


const Shelf = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

  const [currentNavState, setCurrentNavState] =
    useRecoilState(currentShelfState);
  const [currentDrinkState, setCurrentDrinkState] = useRecoilState(itemState);
  const [currentTaskState, setCurrentTaskState] = useRecoilState(taskState);

  const [itemPosition, setItemPosition] = useState(0);
  const [currentSelection, setCurrentSelection] = useState([0, 0]);
  const [onDisplay, setOnDisplay] = useState([
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
    [6, 6],
    [7, 7],
    [8, 8],
    [9, 9],
    [10, 10],
    [11, 11],
    [12, 12],
    [13, 13],
    [17, 15],
    [17, 15],
  ]);

  const [visibilityDetails, setVisibilityDetails] = useState(false);
  const [visibilityTasks, setVisibilityTasks] = useState(false);

  const popupCloseDetailsHandler = (e) => {
    setVisibilityDetails(e);
  };

  const popupCloseTasksHandler = (e) => {
    setVisibilityTasks(e);
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
                    setCurrentTaskState(DisplayItem[0]), setCurrentDrinkState(DisplayItem[1]), setItemPosition(i)
                  )}
                >
                  <Tooltip title={<h2>{DrinksCollection[DisplayItem[1]].name}</h2>}>
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
                      src={
                        DrinksCollection[currentDrinkState]
                          .imageName
                      }
                      className=""
                      alt="item"
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
                    <img
                      src={FinishButton}
                      className="finish-button"
                      onClick={() => 
                        setOnDisplay(
                          [].concat(
                            onDisplay.slice(0, itemPosition),
                            onDisplay.slice(
                              itemPosition + 1,
                              16
                            ),
                            [[17,15]]
                          )
                        )
                        
                      }
                    />
                    <div className="task-box">
                      <h5 style={{ marginTop: "4px", marginBottom: "4px" }}>
                        {
                          TasksCollection[[currentTaskState]
                          ].title
                        }
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
                      <img src={LogOutButton} className="nav-button" onClick=""/>
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
      </CustomPopup>

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
                  {TasksCollection.slice(0,17).map((Task, i) => (
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
                [].concat(
                  [currentSelection],
                  onDisplay.slice(0, 15)
                )
              )
            }
          />
        </div>
      </TasksPopup>
    </div>
  );
};

export default Shelf;