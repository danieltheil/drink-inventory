import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

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
    <Link to={`/${viewState}`}
      onClick={() => setViewState(viewState)}
      className={`
            cardContainer 
            ${gradient} 
            col-span-${cols} 
            row-span-${rows} 
            text-gray-50
            content-center
            text-center
            m-6 mt-10 ml-8
            transition
            hover:scale-[1.01]
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
    </Link>
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
