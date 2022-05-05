import colors from "../../../utils/Colors";
import PropTypes from "prop-types";

import { useState } from "react";

function AmountFormInput({ amount, setAmount, isValid }) {
  const [borderColor, setBorderColor] = useState(colors.cardBackground);

  return (
    <label className="col-end-1">
      Amount:
      <input
        type="text"
        placeholder="2"
        onChange={(e) => {
          setAmount(e.target.value);
          setBorderColor(
            isValid("amount", e.target.value)
              ? colors.cardBackground
              : colors.red
          );
        }}
        className={`rounded 
                my-4 py-2 px-4 ml-4
                transition hover:brightness-75 focus:brightness-75 placeholder:opacity-75`}
        style={{
          backgroundColor: colors.darkCardBackground,
          border: `1px solid ${borderColor}`,
          color: colors.lightText,
        }}
      />
      { isValid("amount", amount) ? null : (
        <div className="font-semibold text-md" style={{ color: colors.red }}>
          Amount must be a number
        </div>
      )}
    </label>
  );
}

AmountFormInput.propTypes = {
  amount: PropTypes.number.isRequired,
  setAmount: PropTypes.func.isRequired,
  isValid: PropTypes.func.isRequired,
};

export default AmountFormInput;
