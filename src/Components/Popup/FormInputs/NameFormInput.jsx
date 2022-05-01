import colors from "../../../utils/Colors";
import PropTypes from "prop-types";


function NameFormInput({ setName, name }) {
  return (
    <label className="col-end-1">
      Name:
      <input
        type="text"
        placeholder="Vodka"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={`rounded 
                my-4 py-2 px-4 ml-8
                transition hover:brightness-75 focus:brightness-75 placeholder:opacity-75`}
        style={{
          backgroundColor: colors.darkCardBackground,
          color: colors.lightText,
        }}
      />
    </label>
  );
}

NameFormInput.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
}

export default NameFormInput;
