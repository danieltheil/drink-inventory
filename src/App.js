import colors from "./utils/Colors";

import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import AlcCardView from "./Components/DesktopViews/AlcCardView";
import MobileAlcCardView from "./Components/MobileViews/MobileAlcCardView";
import MobileMixCardView from "./Components/MobileViews/MobileMixCardView";
import MixCardView from "./Components/DesktopViews/MixCardView";

import useWindowDimensions from "./utils/WindowDimensionsGrabber";
import viewStates from "./utils/ViewStates";
import { useState } from "react";
import { isMobile } from "react-device-detect";

function App() {
  document.body.style.backgroundColor = colors.background;

  const [viewState, setViewState] = useState(viewStates.alcoholView);
  const { width } = useWindowDimensions();
  const MAX_WIDTH = 1200;

  return (
    <div className="App h-screen">
      <NavBar />
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

        <div className="card-container grid grid-cols-9 grid-rows-10 col-span-11 grid-flow-row">
          {isMobile || width < MAX_WIDTH ? (
            viewState === viewStates.alcoholView ? (
              <MobileAlcCardView
                isMobile={ isMobile || width < MAX_WIDTH }
                setViewState={ setViewState }
              />
            ) : (
              <MobileMixCardView
                isMobile={isMobile || width < MAX_WIDTH}
                setViewState={ setViewState }
              />
            )
          ) : viewState === viewStates.alcoholView ? (
            <AlcCardView setViewState={ setViewState } />
          ) : (
            <MixCardView setViewState={ setViewState } />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
