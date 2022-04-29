import DrinkCard from "../../DrinkCard";
import colors from "../../../utils/Colors";
import BannerCard from "../../BannerCard";
import viewStates from "../../../utils/ViewStates";
import PropTypes from "prop-types";

function MixCardView({ setViewState, drinks, searchTerm }) {
  return (
    <>
      <BannerCard
        setViewState={setViewState}
        viewState={viewStates.alcoholView}
        cols="11"
        rows="1"
        bannerContent="⇨ Goto Alcoholic Drinks! 🍺"
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
                  cols="3"
                  rows="1"
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

MixCardView.propTypes = {
  setViewState: PropTypes.func.isRequired,
  drinks: PropTypes.array,
  searchTerm: PropTypes.string,
};

export default MixCardView;
