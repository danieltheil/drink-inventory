import PropTypes from "prop-types";
import { useContext } from "react";

import MobileMixCardView from "../Views/MobileViews/MobileMixCardView";
import MixCardView from "../Views/DesktopViews/MixCardView";
import SideBar from "../SideBar";
import NavBar from "../NavBar";
import ApiNotAvailableView from "../Views/DesktopViews/ApiNotAvailableView";

import { isMobile } from "react-device-detect";
import { MAX_WIDTH, useWindowDimensions } from "../../utils/WindowDimensionsGrabber";
import { DrinkContext } from "../../utils/Context";
import viewStates from "../../utils/ViewStates";
import colors from "../../utils/Colors";

function MixPage({ setViewState, searchTerm, viewState, setSearchTerm }) {
  const { width } = useWindowDimensions();
  //sets view state to right view when user reloads route
  setViewState(viewStates.mixView);

  const context = useContext(DrinkContext);

  return (
    <>
      {context.alcDrinks?.length > 0 ? (
        <>
          <NavBar setSearchTerm={setSearchTerm} />
          <div
            className="content-container grid grid-cols-12 h-full w-full"
            style={{ backgroundColor: colors.background }}
          >
            {isMobile || width < MAX_WIDTH ? null : (
              <SideBar
                cols="col-span-1"
                viewState={viewState}
                isAlcohol={false}
                setViewState={setViewState}
              />
            )}

            <div className="card-container grid grid-cols-9 col-span-11">
              {isMobile || width < MAX_WIDTH ? (
                <MobileMixCardView
                  isMobile={isMobile || width < MAX_WIDTH}
                  setViewState={setViewState}
                  searchTerm={searchTerm}
                />
              ) : (
                <MixCardView
                  setViewState={setViewState}
                  searchTerm={searchTerm}
                />
              )}
            </div>
          </div>
        </>
      ) : (
        <ApiNotAvailableView />
      )}
    </>
  );
}

MixPage.propTypes = {
  setViewState: PropTypes.func.isRequired,
  viewState: PropTypes.string,
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
};

export default MixPage;
