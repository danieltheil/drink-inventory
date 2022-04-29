import PropTypes from "prop-types";

function BannerCard({
  setViewState,
  viewState,
  cols,
  rows,
  bannerContent,
  gradient,
  isMobile,
  color,
}) {
  return (
    <button
      onClick={() => setViewState(viewState)}
      className={`
            cardContainer 
            ${gradient} 
            col-span-${cols} 
            row-span-${rows} 
            text-gray-50
            content-center
            m-6 mt-10 ml-8
            p-2 rounded-lg 
            grid grid-rows-8`}
      style={{ border: "none", backgroundColor: color, maxHeight: "85px" }}
    >
      <div
        className={`
            content-center
            ${isMobile ? "text-lg" : "text-5xl"}
            font-semibold `}
      >
        {bannerContent}
      </div>
    </button>
  );
}

BannerCard.propTypes = {
  setViewState: PropTypes.func.isRequired,
  viewState: PropTypes.string.isRequired,
  bannerContent: PropTypes.string.isRequired,
  gradient: PropTypes.string.isRequired,
  cols: PropTypes.string.isRequired,
  rows: PropTypes.string.isRequired,
};

export default BannerCard;
