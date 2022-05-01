import DrinkCard from "../../DrinkCard";
import BannerCard from "../../BannerCard";
import viewStates from "../../../utils/ViewStates";
import PropTypes from "prop-types";

function AlcCardView({ setViewState, drinks, searchTerm, imageMap }) {
  return (
    <>
      <BannerCard
        setViewState={setViewState}
        viewState={viewStates.mixView}
        cols="11"
        rows="1"
        bannerContent="⇨ Goto Drinks for Mixing! 🥤"
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

AlcCardView.propTypes = {
  setViewState: PropTypes.func.isRequired,
  searchTerm: PropTypes.string,
  drinks: PropTypes.array,
  imageMap: PropTypes.object,
};

export default AlcCardView;
