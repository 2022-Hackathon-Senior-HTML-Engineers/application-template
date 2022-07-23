import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { useRecoilState } from "recoil";

import { currentShelfState } from "../atoms/currentShelfState";

import DetailsPopup from "../components/DetailsPopup";
import { useState } from "react"
import Soju from "../images/soju.png"
import Juice from "../images/juice.png"
import MountGay from "../images/mountGay.png"

import StrawberrySoju from "../images/drinks/strawberry-soju.png";
import AppleSoju from "../images/drinks/apple-soju.png";
import RedBull from "../images/drinks/red-bull.png";
import YakultSoju from "../images/drinks/yakult-soju.png";
import Tui from "../images/drinks/tui.png";

const Shelf = () => {

  const ShelfItemsCollection = [
    4,2,1,0,1,3,4,0,4,1,0,1,2,0,2,3
  ];

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
  }


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
        <div className="machine-bottom"></div>
        <button className="drinks-button" onClick={(e) => setVisibility(!visibility)} >View more details!</button>
      </div>

      <DetailsPopup
        onClose={popupCloseHandler}
        show={visibility}
        title="Drinks"
      >
        <img src={Soju} />
        <img src={Juice} />
        <img src={RedBull} />
        <img src={MountGay} />


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