import PropTypes from "prop-types";

function BannerCard(props) {
  return (
    <button
      onClick={() => props.setViewState(props.viewState)}
      className={`
            cardContainer 
            ${props.gradient} 
            col-span-${props.cols} 
            row-span-${props.rows} 
            text-gray-50
            content-center
            m-6 mt-10 ml-8
            p-2 rounded-lg 
            grid grid-rows-8`}
      style={{ border: "none", backgroundColor: props.color, maxHeight: "85px" }}
    >
      <div
        className={`
            content-center
            ${props.isMobile ? "text-lg" : "text-5xl"}
            font-semibold `}
      >
        {props.bannerContent}
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
