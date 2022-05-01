import colors from "../../../utils/Colors";
import PropTypes from "prop-types";


function ImageFormInput({ setImageFile }) {
  return (
    <label className="col-end-1">
      Image:
      <input
        type="file"
        id="image"
        name="image"
        accept="image/png"
        onChange={(e) => setImageFile(e.target.files[0])}
        className="rounded border-none 
                col-end-1
                my-4 py-2 px-4
                transition hover:brightness-75 focus:brightness-75 placeholder:opacity-75"
        style={{
          backgroundColor: colors.darkCardBackground,
          color: colors.lightText,
        }}
      />
    </label>
  );
}

ImageFormInput.propTypes = {
  setImageFile: PropTypes.func.isRequired,
}

export default ImageFormInput;
