import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Grid } from "@mui/material";
import { RecoilRoot } from "recoil";

// pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Shelf from "./components/Shelf";
import YoutubeVideo from "./pages/YoutubeVideo";
import PanoptoVideo from "./pages/Panopto";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Grid container columns={16}>
            <Grid item xs={6}>
              <div className="shelf-container">
              <Shelf/>
              </div>
            </Grid>
            <Grid item xs={10}>
              <div className="content-container">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/youtube-player" element={<YoutubeVideo />} />
                  <Route path="/panopto" element={<PanoptoVideo />} />
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