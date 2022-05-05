import colors from "../../../utils/Colors";

function ApiNotAvailableView() {
  return (
    <div className="flex justify-center">
      <div className="api-not-available  align-top inline-block text-center">
        <img className="" src="/api_unavailable.jpg" alt="HST bad 😎😎"></img>
        <h1
          className="block text-2xl font-semibold mt-4"
          style={{ color: colors.lightText }}
        >
          API is not available...
        </h1>
      </div>
    </div>
  );
}

export default ApiNotAvailableView;
