import colors from "./utils/Colors";
import { fetchDrinks, fetchImages } from "./utils/ApiHandler";

import MixPage from "./Components/Pages/MixPage";
import AlcPage from "./Components/Pages/AlcPage";
import NavBar from "./Components/NavBar";

import viewStates from "./utils/ViewStates";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";


function App() {
  document.body.style.backgroundColor = colors.background;

  const [viewState, setViewState] = useState(viewStates.alcoholView);
  const [imageMap, setImageMap] = useState({});
  const [alcDrinks, setAlcDrinks] = useState([]);
  const [mixDrinks, setMixDrinks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    fetchImages(setImageMap);
  }, [])


  useEffect(() => {
    fetchDrinks(setAlcDrinks, setMixDrinks);
  }, [viewState]);

  return (
    <Router>
      <div className="App h-screen">
        <NavBar setSearchTerm={setSearchTerm} 
          mixDrinks={mixDrinks}
          alcDrinks={alcDrinks}
          setMixDrinks={setMixDrinks}
          setAlcDrinks={setAlcDrinks} 
          imageMap={imageMap}
          setImageMap={setImageMap}
          />
        <div
          className="content-container grid grid-cols-12 h-full w-full"
          style={{ backgroundColor: colors.background }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <AlcPage
                  isMobile={isMobile}
                  viewState={viewState}
                  setViewState={setViewState}
                  searchTerm={searchTerm}
                  drinks={alcDrinks}
                  imageMap={imageMap}
                />
              }
            />

            <Route
              path="/alc"
              element={
                <AlcPage
                  isMobile={isMobile}
                  viewState={viewState}
                  setViewState={setViewState}
                  searchTerm={searchTerm}
                  drinks={alcDrinks}
                  imageMap={imageMap}
                />
              }
            />

            <Route
              path="/mix"
              element={
                <MixPage
                  isMobile={isMobile}
                  viewState={viewState}
                  setViewState={setViewState}
                  searchTerm={searchTerm}
                  drinks={mixDrinks}
                  imageMap={imageMap}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
