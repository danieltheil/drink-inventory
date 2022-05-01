import colors from "../../../utils/Colors";

function SubmitButton() {
  return (
    <button
      type="submit"
      className="
            col-end-1
            p-6 mt-4 rounded-lg font-semibold
            transition hover:scale-105 hover:brightness-75"
      style={{
        backgroundColor: colors.green,
        color: colors.darkText,
      }}
    >
      Add the Drink!
    </button>
  );
}

export default SubmitButton;
