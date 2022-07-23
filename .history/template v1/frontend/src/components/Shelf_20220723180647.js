import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

import StrawberrySoju from "../images/drinks/strawberry-soju.png";
import AppleSoju from "../images/drinks/apple-soju.png";

const Shelf = () => {
  // const ShelfItemsCollection = [
  //     { id: 1, name: "Strawberry Soju", imageName: "StrawberrySoju" },
  //     { id: 2, name: "Apple Soju", imageName: "AppleSoju" },
  //     { id: 3, name: "Apple Soju", imageName: "AppleSoju" },
  //     { id: 4, name: "Apple Soju", imageName: "AppleSoju" },
  //     { id: 5, name: "Strawberry Soju", imageName: "StrawberrySoju" },
  //   ];

  const ShelfItemsCollection = [
    { id: 1, name: "Strawberry Soju", imageName: StrawberrySoju },
    { id: 2, name: "Apple Soju", imageName: AppleSoju },
    { id: 3, name: "Apple Soju", imageName: AppleSoju },
    { id: 4, name: "Apple Soju", imageName: AppleSoju },
    { id: 5, name: "Strawberry Soju", imageName: StrawberrySoju },
    { id: 5, name: "Strawberry Soju", imageName: StrawberrySoju },
    { id: 5, name: "Strawberry Soju", imageName: StrawberrySoju },
    { id: 5, name: "Strawberry Soju", imageName: StrawberrySoju },
    { id: 5, name: "Strawberry Soju", imageName: StrawberrySoju },
    { id: 5, name: "Strawberry Soju", imageName: StrawberrySoju },
    { id: 5, name: "Strawberry Soju", imageName: StrawberrySoju },
    { id: 5, name: "Strawberry Soju", imageName: StrawberrySoju },
    { id: 5, name: "Strawberry Soju", imageName: StrawberrySoju },
    { id: 5, name: "Strawberry Soju", imageName: StrawberrySoju },
    { id: 5, name: "Strawberry Soju", imageName: StrawberrySoju },
    { id: 5, name: "Strawberry Soju", imageName: StrawberrySoju },
  ];

  const DrinksCollection = [
    { id: 1, name: "Strawberry Soju", imageName: "strawberry-soju" },
    { id: 2, name: "Apple Soju", imageName: "apple-soju" },
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
                    src={ShelfItem.imageName}
                    className=""
                    alt={ShelfItem.name}
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