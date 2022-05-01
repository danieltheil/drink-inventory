import PropTypes from "prop-types";

import MobileMixCardView from "../Views/MobileViews/MobileMixCardView";
import MixCardView from "../Views/DesktopViews/MixCardView";
import SideBar from "../SideBar";

import { MAX_WIDTH, useWindowDimensions } from "../../utils/WindowDimensionsGrabber";
import { isMobile } from "react-device-detect";
import viewStates from "../../utils/ViewStates";

function MixPage({ setViewState, searchTerm, viewState }) {
  const { width } = useWindowDimensions();
  //sets view state to right view when user reloads route
  setViewState(viewStates.mixView);

  return (
    <>
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
          <MixCardView setViewState={setViewState} searchTerm={searchTerm} />
        )}
      </div>
    </>
  );
}

MixPage.propTypes = {
  setViewState: PropTypes.func.isRequired,
  viewState: PropTypes.string,
  searchTerm: PropTypes.string,
};

export default MixPage;
