import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

import StrawberrySoju from "../images/drinks/strawberry-soju.png";
import AppleSoju from "../images/drinks/apple-soju.png";
import RedBull from "../images/drinks/red-bull.png";
import YakultSoju from "../images/drinks/yakult-sju.png";

const Shelf = () => {

  const ShelfItemsCollection = [
    0,2,1,0,1,3,1,0,3,1,0,1,2,0,2,3
  ];

  const DrinksCollection = [
    { id: 0, name: "Strawberry Soju", imageName: StrawberrySoju },
    { id: 1, name: "Apple Soju", imageName: AppleSoju },
    { id: 2, name: "Red Bull", imageName: RedBull },
    { id: 3, name: "Yakult Soju", imageName: YakultSoju },
  ];


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
      </div>

      <div className="nav-container"></div>
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