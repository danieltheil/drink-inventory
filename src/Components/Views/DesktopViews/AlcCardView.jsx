import DrinkCard from "../../DrinkCard";
import colors from "../../../utils/Colors";
import BannerCard from "../../BannerCard";
import viewStates from "../../../utils/ViewStates";
import PropTypes from "prop-types";

function AlcCardView({ setViewState, drinks, searchTerm }) {
  return (
    <>
      <BannerCard
        setViewState={setViewState}
        viewState={viewStates.mixView}
        cols="11"
        rows="1"
        bannerContent="⇨ Goto Drinks for Mixing! 🥤"
        gradient="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
      />

      <div className="drink-card-container grid grid-cols-9 grid-rows-2 col-span-9 row-span-3">
        {drinks
          .filter((drink) =>
            searchTerm
              ? drink.name.toLowerCase().includes(searchTerm.toLowerCase())
              : drink
          )
          .map((drink) => {
            return (
              <>
                <DrinkCard
                  name={drink.name}
                  amount={drink.amount}
                  price={drink.price}
                  key={drink.name}
                  darkerColor={colors.darkCardBackground}
                  color={colors.cardBackground}
                  fileName={drink.fileName}
                  url={drink.url}
                />
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
};

export default AlcCardView;
