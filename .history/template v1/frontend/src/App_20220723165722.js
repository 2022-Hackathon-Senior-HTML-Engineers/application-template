import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Grid } from "@mui/material";
import { RecoilRoot } from "recoil";

// pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Shelf from "./components/Shelf";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Grid container spacing={0} columns={16}>
            <Grid item xs={6}>
              <div className="shelf-container">
              <Shelf/>
              </div>
            </Grid>
            <Grid item xs={10}>
              <div className="content-container">
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
              </div>
            </Grid>
          </Grid>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
