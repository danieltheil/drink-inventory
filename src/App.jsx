import colors from "./utils/Colors";

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
  const [drinks, setDrinks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function fetchDrinks(drinkType) {
    const fetchData = async () => {
      const result = await fetch(`http://localhost:8081/drinks/${drinkType}`);
      const data = await result.json();
      console.log(data);
      setDrinks(data);
    };
    fetchData();
  }

  useEffect(() => {
    fetchDrinks(viewState);
  }, [viewState, searchTerm]);

  return (
    <Router>
      <div className="App h-screen">
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
                  drinks={drinks}
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
                  drinks={drinks}
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
                  drinks={drinks}
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
