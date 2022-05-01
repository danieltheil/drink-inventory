import colors from "../../../utils/Colors";
import PropTypes from "prop-types";


function AmountFormInput({ setAmount }) {
  return (
    <label className="col-end-1">
      Amount:
      <input
        type="text"
        placeholder="2"
        onChange={(e) => setAmount(e.target.value)}
        className={`rounded 
                my-4 py-2 px-4 ml-4
                transition hover:brightness-75 focus:brightness-75 placeholder:opacity-75`}
        style={{
          backgroundColor: colors.darkCardBackground,
          color: colors.lightText,
        }}
      />
    </label>
  );
}

AmountFormInput.propTypes = {
  setAmount: PropTypes.func.isRequired,
};

export default AmountFormInput;
