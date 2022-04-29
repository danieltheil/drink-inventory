import colors from "../utils/Colors";
import viewStates from "../utils/ViewStates";
import PropTypes from "prop-types";

function SideBar({cols, setViewState, viewState}) {
  return (
    <div className={`${cols}`} style={{ backgroundColor: colors.navBar }}>
      <div className="tab-Container grid grid-rows-10">
        <button
          onClick={() => setViewState(viewStates.alcoholView)}
          className="row-span-2 text-2xl pt-4 pb-4 font-semibold"
          style={{
            backgroundColor:
              viewState === viewStates.alcoholView
                ? colors.darkCardBackground
                : colors.cardBackground,
            color: colors.lightText,
          }}
        >
          Alcohol Drinks
        </button>

        <button
          onClick={() => setViewState(viewStates.mixView)}
          className="row-span-2 text-2xl pt-8 pb-8 font-semibold"
          style={{
            backgroundColor:
              viewState === viewStates.mixView
                ? colors.darkCardBackground
                : colors.cardBackground,
            color: colors.lightText,
          }}
        >
          Mix Drinks
        </button>
      </div>
    </div>
  );
}

SideBar.propTypes = {
  setViewState: PropTypes.func.isRequired,
  viewState: PropTypes.string.isRequired,
  cols: PropTypes.string.isRequired,
};

export default SideBar;
