import colors from "../utils/Colors";
import viewStates from "../utils/ViewStates";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function SideBar({ cols, setViewState, viewState }) {
  return (
    <div className={`${cols}`} style={{ backgroundColor: colors.navBar }}>
      <div className="tab-Container grid grid-rows-10">
        <Link
          to={`/${viewStates.alcoholView}`}
          onClick={() => setViewState(viewStates.alcoholView)}
          className="row-span-2 pt-4 pb-4
          text-2xl font-semibold text-center 
          transition hover:brightness-75"
          style={{
            backgroundColor:
              viewState === viewStates.alcoholView
                ? colors.darkCardBackground
                : colors.cardBackground,
            color: colors.lightText,
          }}
        >
          Alcohol Drinks
        </Link>

        <Link
          to={`/${viewStates.mixView}`}
          onClick={() => setViewState(viewStates.mixView)}
          className="row-span-2 pt-8 pb-8 
          font-semibold text-2xl text-center
          transition hover:brightness-75"
          style={{
            backgroundColor:
              viewState === viewStates.mixView
                ? colors.darkCardBackground
                : colors.cardBackground,
            color: colors.lightText,
          }}
        >
          Mix Drinks
        </Link>
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
