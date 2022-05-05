import colors from "../../../utils/Colors";
import PropTypes from "prop-types";

import { useState } from "react";

function ImageFormInput({ imageFile, setImageFile, isValid }) {
  const [borderColor, setBorderColor] = useState(colors.cardBackground);

  return (
    <label className="col-end-1">
      Image:
      <input
        type="file"
        id="image"
        name="image"
        accept="image/png"
        onChange={(e) => {
          setImageFile(e.target.files[0]);
          setBorderColor(
            isValid("image", e.target.files[0])
              ? colors.cardBackground
              : colors.red
          );
        }}
        className="rounded border-none 
                col-end-1
                my-4 py-2 px-4
                transition hover:brightness-75 focus:brightness-75 placeholder:opacity-75"
        style={{
          backgroundColor: colors.darkCardBackground,
          border: `1px solid ${borderColor}`,
          color: colors.lightText,
        }}
      />
      { isValid("image", imageFile ? imageFile.name : "") ? null : (
        <div className="font-semibold text-md" style={{ color: colors.red }}>
          Image must be png!
        </div>
      )}
    </label>
  );
}

ImageFormInput.propTypes = {
  imageFile: PropTypes.ImageFormInput || PropTypes.string,
  setImageFile: PropTypes.func.isRequired,
  isValid: PropTypes.func.isRequired,
};

export default ImageFormInput;
