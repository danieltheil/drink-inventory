import DrinkCard from "../../DrinkCard";
import BannerCard from "../../BannerCard";
import viewStates from "../../../utils/ViewStates";
import PropTypes from "prop-types";
import { useContext } from "react";
import { DrinkContext } from "../../../utils/Context";

function MixCardView({ setViewState, searchTerm }) {
  const context = useContext(DrinkContext);

  return (
    <>
      <BannerCard
        setViewState={setViewState}
        viewState={viewStates.alcoholView}
        cols="11"
        rows="1"
        bannerContent="⇨ Goto Alcoholic Drinks! 🍺"
        key={"mix_banner"}
      />

      <div className="drink-card-container grid grid-cols-9 grid-rows-2 col-span-9 row-span-3">
        {context.mixDrinks
          .filter((drink) =>
            searchTerm
              ? drink.name.toLowerCase().includes(searchTerm.toLowerCase())
              : drink
          )
          .map((drink) => {
            return (
              <DrinkCard
                paramDrink={drink}
                key={drink.name}
                image={context.imageMap[drink.name]}
              />
            );
          })}
      </div>
    </>
  );
}

MixCardView.propTypes = {
  setViewState: PropTypes.func.isRequired,
  searchTerm: PropTypes.string,
};

export default MixCardView;
