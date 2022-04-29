import PropTypes from "prop-types";

import MobileMixCardView from "../Views/MobileViews/MobileMixCardView";
import MixCardView from "../Views/DesktopViews/MixCardView";
import SideBar from "../SideBar";

import useWindowDimensions from "../../utils/WindowDimensionsGrabber";
import { isMobile } from "react-device-detect";

function MixPage({ setViewState, drinks, searchTerm, viewState }) {
  const { width } = useWindowDimensions();
  const MAX_WIDTH = 1200;

  return (
    <>
      {isMobile || width < MAX_WIDTH ? null : (
        <SideBar
          cols="col-span-1"
          viewState={viewState}
          setViewState={setViewState}
        />
      )}

      <div className="card-container grid grid-cols-9 col-span-11">
        {isMobile || width < MAX_WIDTH ? (
          <MobileMixCardView
            isMobile={isMobile || width < MAX_WIDTH}
            setViewState={setViewState}
            drinks={drinks}
            searchTerm={searchTerm}
          />
        ) : (
          <MixCardView
            setViewState={setViewState}
            drinks={drinks}
            searchTerm={searchTerm}
          />
        )}
      </div>
    </>
  );
}

MixPage.propTypes = {
  setViewState: PropTypes.func.isRequired,
  viewState: PropTypes.string,
  searchTerm: PropTypes.string,
  drinks: PropTypes.array,
};

export default MixPage;
