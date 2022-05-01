import { useState } from "react";
import PropTypes from "prop-types";

import colors from "../utils/Colors";
import { addDrink } from "../utils/ApiHandler";

function DrinkCard({ paramDrink, image }) {
  const [modifiedAmount, setAmount] = useState(paramDrink.amount);

  function updateAmount(amount) {
    let drink = { name: paramDrink.name, amount: modifiedAmount + amount };
  
    addDrink(drink)
      .then((res) => console.log(res.status))
      .catch((err) => console.log(err));

    return parseInt(modifiedAmount) + amount;
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
                grid divide-y divide-gray-800`}
      style={{ border: "none", backgroundColor: colors.cardBackground }}
    >
      {/* Price of Drink */}
      <div
        className="content-price
            ml-4 mt-4 
            text-2xl font-semibold"
        style={{ color: colors.lightText }}
      >
        {paramDrink.price}
      </div>

      {/* Button Grid */}
      <div className="grid grid-cols-10">
        {/* Image Container */}
        <div
          className="image-container
              my-4 mx-8
              col-span-3
              transition
              hover:scale-105"
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
                    transition
                    hover:scale-110
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
                    transition
                    hover:scale-110
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
};

export default DrinkCard;
