import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'

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
              <Route path="/welcome" element={<Welcome />} />
              <Route path="recommendations" element={<Recommendations />} />
              <Route path="overview" element={<Overview />} />
              <Route path="store" element={<Store />} />
              <Route path="friends" element={<Friends />} />
              <Route path="previous-entries" element={<PreviousEntries />} />
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
              <Route path="ahmads-profile" element={<AhmadsProfile />} />
              <Route path="ahmads-island" element={<AhmadsIsland />} />
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

