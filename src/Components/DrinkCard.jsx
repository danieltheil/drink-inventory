import { useState, useContext } from "react";
import PropTypes from "prop-types";

import colors from "../utils/Colors";
import { DrinkContext } from "../utils/Context";
import { fetchDrinks, deleteDrink, updateDrink } from "../utils/ApiHandler";
import {
  MAX_WIDTH,
  useWindowDimensions,
} from "../utils/WindowDimensionsGrabber";
import { isMobile } from "react-device-detect";

function DrinkCard({ paramDrink, image, animationDuration }) {
  const [modifiedAmount, setAmount] = useState(paramDrink.amount);
  const { width } = useWindowDimensions();

  const context = useContext(DrinkContext);

  function updateAmount(amount) {
    let drink = { name: paramDrink.name, amount: modifiedAmount + amount };
    updateDrink(drink);
    return parseInt(modifiedAmount) + amount;
  }

  function handleDelete(drinkName) {
    fetchDrinks(context);
    deleteDrink({ name: drinkName }, context);
  }

  function parseAnimationDuration() {
    return animationDuration / 10 + 0.5;
  }

  function parseAnimationDelay() {
    return animationDuration / 10;
  }

  return (
    <div
      className={`
                cardContainer 
                text-gray-50
                m-6 ml-8
                p-2 rounded-lg
                col-span-3
                row-span-1
                grid divide-y divide-gray-800
                animate-fade-in-down`}
      style={{
        border: "none",
        opacity: 0,
        backgroundColor: colors.cardBackground,
        animationDuration: `${parseAnimationDuration()}s`,
        animationDelay: `${parseAnimationDelay()}s`,
      }}
    >
      {/* Price of Drink */}
      <div className="grid grid-cols-10">
        <div
          className="content-price
          ml-4 mt-4 pb-2
          text-2xl font-semibold"
          style={{ color: colors.lightText }}
        >
          {paramDrink.price ? paramDrink.price : "N/A"}
        </div>
        <button
          className={`
          rounded
          transition hover:scale-110 hover:-translate-y-[0.125rem] duration-[200ms]
          text-l font-semibold
          ml-6 my-2
          mx-4 ${
            isMobile || width < MAX_WIDTH ? "col-end-10" : "col-start-11"
          }  
          `}
          style={{
            backgroundColor: colors.red,
            color: colors.darkText,
            maxWidth: "40px",
            maxHeight: "40px",
            minHeight: "30px",
            minWidth: "30px",
          }}
          onClick={() => handleDelete(paramDrink.name)}
        >
          X
        </button>
      </div>

      {/* Button Grid */}
      <div className="grid grid-cols-10">
        {/* Image Container */}
        <div
          className="image-container
              my-4 mx-8
              col-span-3
              transition hover:scale-105"
        >
          <img
            src={`${image}`}
            alt="drink"
            style={{ maxWidth: "120px", maxHeight: "120px" }}
          />
        </div>

        <button
          onClick={() => setAmount(updateAmount(-1))}
          className="
                    h-12
                    mt-12 col-end-8
                    transition hover:scale-110 duration-[200ms] hover:brightness-[80%]
                    text-2xl font-extrabold
                    rounded-lg"
          style={{ backgroundColor: colors.red, color: colors.darkText }}
        >
          -
        </button>

        <button
          onClick={() => setAmount(updateAmount(1))}
          className="
                    h-12
                    mt-12 col-end-10 
                    transition hover:scale-110 duration-[200ms] hover:-translate-y-[0.125rem] hover:brightness-[80%]
                    text-2xl font-extrabold
                    rounded-lg"
          style={{ backgroundColor: colors.green, color: colors.darkText }}
        >
          +
        </button>
      </div>

      {/* Name and Amount of Drink */}
      <div
        className="content-info ml-4 mt-2 text-gray-50 "
        style={{ color: colors.lightText }}
      >
        {paramDrink.name}: {modifiedAmount}x
      </div>

      <button
        onClick={() => {
          // eslint-disable-next-line no-restricted-globals
          location.href = paramDrink.url;
        }}
        className="Link Container 
        pt-2 pb-2 mt-4
        transition hover:scale-[1.01]
        rounded-b-lg"
        style={{ backgroundColor: colors.darkCardBackground }}
      >
        <div className="text-gray-50 text-left ml-8">Amazon Link:</div>
      </button>
    </div>
  );
}

DrinkCard.propTypes = {
  paramDrink: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  animationDuration: PropTypes.number.isRequired,
};

export default DrinkCard;
