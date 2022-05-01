import colors from "../../../utils/Colors";
import PropTypes from "prop-types";

function TypeFormInput({ setType, type }) {
  return (
    <label className="col-end-1">
      Type:
      <br></br>
      <select
        placeholder="alc"
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="rounded border-none
                my-4 py-2 px-4
                transition hover:brightness-75 focus:brightness-75 placeholder:opacity-75"
        style={{
          backgroundColor: colors.darkCardBackground,
          color: colors.lightText,
        }}
      >
        <option className="p-2" value="alc">
          Alcohol
        </option>
        <option value="mix">Mix Drinks</option>
      </select>
    </label>
  );
}

TypeFormInput.propTypes = {
  type: PropTypes.string.isRequired,
  setType: PropTypes.func.isRequired,
}

export default TypeFormInput;
