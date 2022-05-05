import colors from "../../../utils/Colors";
import PropTypes from "prop-types";
import { useState } from "react";

function URLFormInput({ setURL, url, isValid }) {
  const [borderColor, setBorderColor] = useState(colors.cardBackground);

  return (
    <label className="col-end-1">
      URL:
      <input
        type="text"
        placeholder="https://www.amazon.de/"
        onChange={(e) => {
          setURL(e.target.value);
          setBorderColor(
            isValid("url", e.target.value) ? colors.cardBackground : colors.red
          );
        }}
        value={url}
        className="rounded border-none
                col-end-1
                my-4 py-2 px-4 ml-12
                transition hover:brightness-75 focus:brightness-75 placeholder:opacity-75"
        style={{
          backgroundColor: colors.darkCardBackground,
          color: colors.lightText,
          border: `1px solid ${colors.red}`,
          borderColor: `${borderColor}`,
        }}
      />
      {!isValid("url", url) && url.length > 0 ? (
        <div className="font-semibold text-md" style={{ color: colors.red }}>
          Must be an Amazon.de url
        </div>
      ) : null}
    </label>
  );
}

URLFormInput.propTypes = {
  url: PropTypes.string.isRequired,
  setURL: PropTypes.func.isRequired,
  isValid: PropTypes.func.isRequired,
};

export default URLFormInput;
