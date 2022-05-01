import colors from "./utils/Colors";
import { fetchDrinks, fetchImages } from "./utils/ApiHandler";
import { DrinkContext } from "./utils/Context";

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

  const drinkContextPayLoad = {
    alcDrinks: alcDrinks,
    mixDrinks: mixDrinks,
    setAlcDrinks: setAlcDrinks,
    setMixDrinks: setMixDrinks,
    imageMap: imageMap,
    setImageMap: setImageMap,
  }

  useEffect(() => {
    fetchImages(setImageMap);
  }, [])


  useEffect(() => {
    fetchDrinks({ setAlcDrinks: setAlcDrinks, setMixDrinks: setMixDrinks });
  }, [viewState]);

  return (
    <Router>
      <div className="App h-screen">
        <DrinkContext.Provider value={ drinkContextPayLoad }>
        <NavBar setSearchTerm={setSearchTerm} />
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
                />
              }
            />
          </Routes>
        </div>
      </DrinkContext.Provider >
      </div>
    </Router>
  );
}

export default App;
