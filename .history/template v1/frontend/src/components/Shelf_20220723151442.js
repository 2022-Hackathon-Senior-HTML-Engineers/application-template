import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const Shelf = () => {
  return (
    <header>
      <div className="">
        <h1>Shelf</h1>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <p>HEHEHEHEHEHEHEHEHE</p>
          </Grid>
          <Grid item xs={4}>
          <p>HEHEHEHEHEHEHEHEHE</p>
          </Grid>
          <Grid item xs={4}>
          <p>HEHEHEHEHEHEHEHEHE</p>
          </Grid>
          <Grid item xs={4}>
          <p>HEHEHEHEHEHEHEHEHE</p>
          </Grid>
        </Grid>
      </div>
    </header>
  );
};

export default Shelf;
