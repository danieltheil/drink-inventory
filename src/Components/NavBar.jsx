import colors from "../utils/Colors";
import PropTypes from "prop-types";

import Popup from "reactjs-popup";
import PopupForm from "./Popup/PopupForm";
import { Link } from "react-router-dom";

import { useState } from "react";
import { MAX_WIDTH, useWindowDimensions } from "../utils/WindowDimensionsGrabber";
import { isMobile } from "react-device-detect";

function NavBar({ setSearchTerm }) {
  const { width } = useWindowDimensions();

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      {isPopupOpen ? (
        <div
          className="w-screen h-screen fixed z-10"
          style={{ backgroundColor: "black", opacity: "0.6" }}
        ></div>
      ) : null}
      <div
        className="p-6 text-xl font-semibold grid grid-cols-10 shadow-lg"
        style={{ backgroundColor: colors.navBar }}
      >
        <Link to="/">
          <div className="text-2xl">
            <img
              className="transition hover:-rotate-[8deg] origin-bottom-right duration-[400ms] hover:scale-110"
              src="/hst_logo.png"
              alt=""
              style={{ maxWidth: "70px", maxHeight: "70px" }}
            ></img>
          </div>
        </Link>

        <input
          type="text"
          placeholder="Search Drink"
          className="p-2 bg-slate-100 col-span-4 col-start-4 rounded-lg transition hover:brightness-75"
          name="searchTerm"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          style={{
            backgroundColor: colors.darkCardBackground,
            color: colors.lightText,
            maxHeight: "60px",
          }}
        ></input>

        <Popup
          closeOnEscape={true}
          position="right center"
          open={isPopupOpen}
          onOpen={() => setIsPopupOpen(true)}
          onClose={() => setIsPopupOpen(false)}
          modal={true}
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
            isPopupOpen={isPopupOpen}
            setIsPopupOpen={setIsPopupOpen}
          />
        </Popup>
      </div>
    </>
  );
}

NavBar.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};

export default NavBar;
