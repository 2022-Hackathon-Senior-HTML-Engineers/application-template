import { BrowserRouter, Routes, Route } from "react-router-dom";

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
              <div className="left-side-nav">
                <Navbar />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="right-side-nav">
                <Routes>
                  <Route path="/" element={<App />} />
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
