import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

import StrawberrySoju from "../images/strawberry-soju.png";

const Shelf = () => {
  return (
    <div>
      <div className="items-window">
        <div className="grid-container">
          <div className="grid-item">
            <img src={StrawberrySoju} className="island-piece noselect clothes2" />
          </div>
          <div className="grid-item">2</div>
          <div className="grid-item">3</div>
          <div className="grid-item">4</div>
        </div>

        <div className="grid-container">
          <div className="grid-item">1</div>
          <div className="grid-item">2</div>
          <div className="grid-item">3</div>
          <div className="grid-item">4</div>
        </div>

        <div className="grid-container">
          <div className="grid-item">1</div>
          <div className="grid-item">2</div>
          <div className="grid-item">3</div>
          <div className="grid-item">4</div>
        </div>

        <div className="grid-container">
          <div className="grid-item">1</div>
          <div className="grid-item">2</div>
          <div className="grid-item">3</div>
          <div className="grid-item">4</div>
        </div>
      </div>

      <div className="nav-container"></div>
    </div>
  );
};

export default Shelf;
