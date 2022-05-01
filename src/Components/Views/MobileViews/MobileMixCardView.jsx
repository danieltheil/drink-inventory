import DrinkCard from "../../DrinkCard";
import BannerCard from "../../BannerCard";
import viewStates from "../../../utils/ViewStates";
import PropTypes from "prop-types";

function MobileMixCardView({ setViewState, isMobile, drinks, searchTerm, imageMap }) {
  return (
    <>
      <div className="grid grid-rows-10 w-screen h-max">
        <BannerCard
          setViewState={setViewState}
          viewState={viewStates.alcoholView}
          rows="2"
          cols="3"
          bannerContent="⇨ Goto Alcoholic Drinks! 🍺"
          isMobile={isMobile}
        />

        {drinks
          .filter((drink) =>
            searchTerm
              ? drink.name.toLowerCase().includes(searchTerm.toLowerCase())
              : drink
          )
          .map((drink, index) => {
            return (
              <>
                <DrinkCard paramDrink={drink} key={index} image={imageMap[drink.name]}/>
              </>
            );
          })}
      </div>
    </>
  );
}

MobileMixCardView.propTypes = {
  setViewState: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  drinks: PropTypes.array,
  searchTerm: PropTypes.string,
  imageMap: PropTypes.object,
};

export default MobileMixCardView;
