import DrinkCard from "../../DrinkCard";
import BannerCard from "../../BannerCard";
import viewStates from "../../../utils/ViewStates";
import PropTypes from "prop-types";

function MixCardView({ setViewState, drinks, searchTerm, imageMap}) {
  return (
    <>
      <BannerCard
        setViewState={setViewState}
        viewState={viewStates.alcoholView}
        cols="11"
        rows="1"
        bannerContent="⇨ Goto Alcoholic Drinks! 🍺"
      />

      <div className="drink-card-container grid grid-cols-9 grid-rows-2 col-span-9 row-span-3">
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

MixCardView.propTypes = {
  setViewState: PropTypes.func.isRequired,
  drinks: PropTypes.array,
  searchTerm: PropTypes.string,
  imageMap : PropTypes.object,
};

export default MixCardView;
