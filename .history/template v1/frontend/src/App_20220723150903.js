import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Grid } from "@mui/material";
import { RecoilRoot } from "recoil";

// pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Grid container spacing={0} columns={16}>
            <Grid item xs={4}>
              <div className="shelf-container">
                <Navbar />
              </div>
            </Grid>
            <Grid item xs={12}>
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
