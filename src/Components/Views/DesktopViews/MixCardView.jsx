import BannerCard from "../../BannerCard";
import viewStates from "../../../utils/ViewStates";
import PropTypes from "prop-types";
import { Suspense, useContext, lazy } from "react";
import { DrinkContext } from "../../../utils/Context";

function MixCardView({ setViewState, searchTerm }) {
  const context = useContext(DrinkContext);
  const DrinkCard = lazy(() => import("../../DrinkCard"));

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

      <div className="drink-card-container grid grid-cols-9 grid-rows-3 col-span-9 row-span-3">
        {context.mixDrinks
          .filter((drink) =>
            searchTerm
              ? drink.name.toLowerCase().includes(searchTerm.toLowerCase())
              : drink
          )
          .map((drink, index) => {
            return (
              <Suspense key={`sus_${drink.name}`} fallback={<div>Loading Card... </div>}>
                <DrinkCard
                  paramDrink={drink}
                  key={drink.name}
                  image={context.imageMap[drink.name]}
                  animationDuration={index}
                />
              </Suspense>
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
