import PropTypes from "prop-types";

import MobileAlcCardView from "../Views/MobileViews/MobileAlcCardView";
import AlcCardView from "../Views/DesktopViews/AlcCardView";
import SideBar from "../SideBar";

import { MAX_WIDTH, useWindowDimensions } from "../../utils/WindowDimensionsGrabber";
import { isMobile } from "react-device-detect";
import viewStates from "../../utils/ViewStates";

function AlcPage({ setViewState, searchTerm, viewState }) {
  const { width } = useWindowDimensions();
  //sets view state to right view when user reloads route
  setViewState(viewStates.alcoholView);

  return (
    <>
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
          <AlcCardView setViewState={setViewState} searchTerm={searchTerm} />
        )}
      </div>
    </>
  );
}

AlcPage.propTypes = {
  setViewState: PropTypes.func.isRequired,
  viewState: PropTypes.string,
  searchTerm: PropTypes.string,
};

export default AlcPage;
