import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const Shelf = () => {
  return (
      <div>
        <h1>Shelf</h1>

        <div className="items-window">
                    <Grid container spacing={1}>
          <Grid item xs={4}>
          <div className="shelf-item"></div>
          </Grid>
          <Grid item xs={4}>
          <div className="shelf-item"></div>
          </Grid>
          <Grid item xs={4}>
          <div className="shelf-item"></div>
          </Grid>
          <Grid item xs={4}>
          <div className="shelf-item"></div>
          </Grid>
          <Grid item xs={4}>
          <div className="shelf-item"></div>
          </Grid>
          <Grid item xs={4}>
          <div className="shelf-item"></div>
          </Grid>
          <Grid item xs={4}>
          <div className="shelf-item"></div>
          </Grid>
          <Grid item xs={4}>
          <div className="shelf-item"></div>
          </Grid>
          <Grid item xs={4}>
          <div className="shelf-item"></div>
          </Grid>
        </Grid>
        </div>


      </div>
  );
};

export default Shelf;
