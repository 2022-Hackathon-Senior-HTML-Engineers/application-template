import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const Shelf = () => {
  return (
    <header>
      <div className="">
        <h1>Shelf</h1>

        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </div>
    </header>
  );
};

export default Shelf;
