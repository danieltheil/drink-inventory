import colors from "../utils/Colors";
import PropTypes from "prop-types";

import Popup from "reactjs-popup";
import PopupForm from "./Popup/PopupForm";
import useWindowDimensions from "../utils/WindowDimensionsGrabber";
import { isMobile } from "react-device-detect";

function NavBar({
  setSearchTerm,
  mixDrinks,
  setMixDrinks,
  alcDrinks,
  setAlcDrinks,
  setImageMap,
  imageMap,
}) {
  const { width } = useWindowDimensions();
  const MAX_WIDTH = 1200;

  return (
    <div
      className="p-6 text-xl font-semibold grid grid-cols-10"
      style={{ backgroundColor: colors.navBar }}
    >
      <div className="mt-2 ml-5 col-span-3 text-gray-50">H S T</div>

      <input
        type="text"
        placeholder="Search Drink"
        className="p-2 bg-slate-100 col-span-5 rounded-lg transition hover:brightness-75"
        name="searchTerm"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        style={{
          backgroundColor: colors.darkCardBackground,
          color: colors.lightText,
        }}
      ></input>

      <Popup
        trigger={
          <button
            className={`
            ${
              isMobile || width < MAX_WIDTH
                ? "text-2xl font-extrabold"
                : "text-xl font-semibold"
            } 
            content-center col-end-11 rounded-lg
            transition hover:scale-105 hover:brightness-75`}
            style={{ backgroundColor: colors.green, color: colors.darkText }}
          >
            {isMobile || width < MAX_WIDTH ? "+" : "Add Drink!"}
          </button>
        }
      >
        <PopupForm
          alcDrinks={alcDrinks}
          setAlcDrinks={setAlcDrinks}
          mixDrinks={mixDrinks}
          setMixDrinks={setMixDrinks}
          imageMap={imageMap}
          setImageMap={setImageMap}
        />
      </Popup>
    </div>
  );
}

NavBar.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
  mixDrinks: PropTypes.array.isRequired,
  setMixDrinks: PropTypes.func.isRequired,
  alcDrinks: PropTypes.array.isRequired,
  setAlcDrinks: PropTypes.func.isRequired,
  imageMap: PropTypes.object.isRequired,
  setImageMap: PropTypes.func.isRequired,
};

export default NavBar;
