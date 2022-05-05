import colors from "../../../utils/Colors";
import PropTypes from "prop-types";
import { useState } from "react";

function NameFormInput({ setName, name, isValid }) {
  const [borderColor, setBorderColor] = useState(colors.cardBackground);

  return (
    <label className="col-end-1">
      Name:
      <input
        type="text"
        placeholder="Vodka"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setBorderColor(
            isValid("name", e.target.value) ? colors.cardBackground : colors.red
          );
        }}
        className={`rounded 
                my-4 py-2 px-4 ml-8
                transition hover:brightness-75 focus:brightness-75 placeholder:opacity-75`}
        style={{
          backgroundColor: colors.darkCardBackground,
          color: colors.lightText,
          border: `1px solid ${borderColor}`,
        }}
      />
      { isValid("name", name) ? null : <div className="font-semibold text-md" style={{color: colors.red}}>Name must not be empty</div>}
    </label>
  );
}

NameFormInput.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  isValid: PropTypes.func.isRequired,
};

export default NameFormInput;
