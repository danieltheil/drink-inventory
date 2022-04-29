import DrinkCard from "../../DrinkCard";
import colors from "../../../utils/Colors";
import BannerCard from "../../BannerCard";
import viewStates from "../../../utils/ViewStates";
import PropTypes from "prop-types";

function MobileAlcCardView({ setViewState, isMobile, drinks, searchTerm }) {
  return (
    <>
      <div className="grid grid-rows-10 w-screen h-max">
        <BannerCard
          setViewState={setViewState}
          viewState={viewStates.mixView}
          rows="2"
          cols="3"
          bannerContent="⇨ Goto Drinks for Mixing! 🥤"
          gradient="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
          isMobile={isMobile}
        />

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
                  rows="2"
                  cols="0"
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

MobileAlcCardView.propTypes = {
  setViewState: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  drinks: PropTypes.array,
  searchTerm: PropTypes.string,
};

export default MobileAlcCardView;
