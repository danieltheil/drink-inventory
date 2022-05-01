import colors from "../../../utils/Colors";
import PropTypes from "prop-types";

function URLFormInput({ setURL, url }) {
  return (
    <label className="col-end-1">
      URL:
      <input
        type="text"
        placeholder="https://www.amazon.de/"
        onChange={(e) => setURL(e.target.value)}
        value={url}
        className="rounded border-none
                col-end-1
                my-4 py-2 px-4 ml-12
                transition hover:brightness-75 focus:brightness-75 placeholder:opacity-75"
        style={{
          backgroundColor: colors.darkCardBackground,
          color: colors.lightText,
        }}
      />
    </label>
  );
}

URLFormInput.propTypes = {
  url: PropTypes.string.isRequired,
  setURL: PropTypes.func.isRequired,
};

export default URLFormInput;
