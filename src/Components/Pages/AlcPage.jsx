import PropTypes from "prop-types";
import { useContext } from "react";

import MobileAlcCardView from "../Views/MobileViews/MobileAlcCardView";
import ApiNotAvailableView from "../Views/DesktopViews/ApiNotAvailableView";
import AlcCardView from "../Views/DesktopViews/AlcCardView";
import SideBar from "../SideBar";
import NavBar from "../NavBar";

import { isMobile } from "react-device-detect";
import { DrinkContext } from "../../utils/Context";
import { MAX_WIDTH, useWindowDimensions } from "../../utils/WindowDimensionsGrabber";

import viewStates from "../../utils/ViewStates";
import colors from "../../utils/Colors";

function AlcPage({ setViewState, searchTerm, viewState, setSearchTerm }) {
  const { width } = useWindowDimensions();
  //sets view state to right view when user reloads route
  setViewState(viewStates.alcoholView);
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
                isAlcoholic={true}
                viewState={viewState}
                setViewState={setViewState}
              />
            )}

            <div className="card-container grid grid-cols-9 col-span-11">
              {isMobile || width < MAX_WIDTH ? (
                <MobileAlcCardView
                  isMobile={isMobile || width < MAX_WIDTH}
                  setViewState={setViewState}
                  searchTerm={searchTerm}
                />
              ) : (
                <AlcCardView
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

AlcPage.propTypes = {
  setViewState: PropTypes.func.isRequired,
  viewState: PropTypes.string,
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
};

export default AlcPage;
