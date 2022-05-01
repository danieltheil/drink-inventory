import DrinkCard from "../../DrinkCard";
import BannerCard from "../../BannerCard";
import viewStates from "../../../utils/ViewStates";
import PropTypes from "prop-types";

function MobileAlcCardView({ setViewState, isMobile, drinks, searchTerm, imageMap}) {
  return (
    <>
      <div className="grid grid-rows-10 w-screen h-max">
        <BannerCard
          setViewState={setViewState}
          viewState={viewStates.mixView}
          rows="2"
          cols="3"
          bannerContent="⇨ Goto Drinks for Mixing! 🥤"
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
                <DrinkCard paramDrink={drink} key={index} image={imageMap[drink.name]} />
              </>
            );
          })}
      </div>
    </>
  );
}

MobileAlcCardView.propTypes = {
  setViewState: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  drinks: PropTypes.array,
  searchTerm: PropTypes.string,
  imageMap: PropTypes.object,
};

export default MobileAlcCardView;
