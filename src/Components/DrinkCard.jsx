import { useState } from "react";
import colors from "../utils/Colors";
import PropTypes from "prop-types";

function DrinkCard({ name, amount, price, color, fileName, url, darkerColor }) {
  const [modifiedAmount, setAmount] = useState(amount);

  function updateAmount(amount) {
    /**update in db */
    let drink = { name: name, amount: modifiedAmount + amount };

    fetch("http://localhost:8081/addDrink", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(drink),
    })
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
      style={{ border: "none", backgroundColor: color }}
    >
      {/* Price of Drink */}
      <div
        className="content-price
            ml-4 mt-4 
            text-2xl font-semibold"
        style={{ color: colors.lightText }}
      >
        {price}
      </div>

      {/* Button Grid */}
      <div className="grid grid-cols-10">
        {/* Image Container */}
        <div
          className="image-container
              my-4 mx-8
              col-span-3"
        >
          <img
            src={window.location.origin + `/assets/${fileName}`}
            alt="drink"
            style={{ maxWidth: "120px", maxHeight: "120px" }}
          />
        </div>

        <button
          onClick={() => setAmount(updateAmount(-1))}
          className="
                    h-12
                    mt-12 col-end-8
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
        {name}: {modifiedAmount}x
      </div>

      <button
        onClick={() => {
          // eslint-disable-next-line no-restricted-globals
          location.href = url;
        }}
        className="Link Container rounded-b-lg pt-2 pb-2 mt-4"
        style={{ backgroundColor: darkerColor }}
      >
        <div className="text-gray-50 text-left ml-8">Amazon Link:</div>
      </button>
    </div>
  );
}

DrinkCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  darkerColor: PropTypes.string.isRequired,
  cols: PropTypes.string.isRequired,
  rows: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default DrinkCard;
