import colors from "./utils/Colors";

import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import AlcCardView from "./Components/Views/DesktopViews/AlcCardView";
import MobileAlcCardView from "./Components/Views/MobileViews/MobileAlcCardView";
import MobileMixCardView from "./Components/Views/MobileViews/MobileMixCardView";
import MixCardView from "./Components/Views/DesktopViews/MixCardView";

import useWindowDimensions from "./utils/WindowDimensionsGrabber";
import viewStates from "./utils/ViewStates";
import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

function App() {
  document.body.style.backgroundColor = colors.background;

  const [viewState, setViewState] = useState(viewStates.alcoholView);
  const [drinks, setDrinks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { width } = useWindowDimensions();
  const MAX_WIDTH = 1200;

  function fetchDrinks(drinkType){
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
  },[viewState, searchTerm]);

  return (
    <div className="App h-screen">
      <NavBar setSearchTerm={setSearchTerm} />
      <div
        className="content-container grid grid-cols-12 h-full w-full"
        style={{ backgroundColor: colors.background }}
      >
        {isMobile || width < MAX_WIDTH ? null : (
          <SideBar
            cols="col-span-1"
            viewState={ viewState }
            setViewState={ setViewState }
          />
        )}

        <div className="card-container grid grid-cols-9 col-span-11">
          {isMobile || width < MAX_WIDTH ? (
            viewState === viewStates.alcoholView ? (
              <MobileAlcCardView
                isMobile={ isMobile || width < MAX_WIDTH }
                setViewState={ setViewState }
                drinks={ drinks }
                searchTerm={ searchTerm }
                />
            ) : (
              <MobileMixCardView
                isMobile={isMobile || width < MAX_WIDTH}
                setViewState={ setViewState }
                drinks={ drinks }
                searchTerm={ searchTerm }
                />
            )
          ) : viewState === viewStates.alcoholView ? (
            <AlcCardView 
              setViewState={ setViewState } 
              drinks={ drinks }
              searchTerm={ searchTerm }
            />
          ) : (
            <MixCardView 
              setViewState={ setViewState }
              drinks={ drinks }
              searchTerm={ searchTerm }
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
