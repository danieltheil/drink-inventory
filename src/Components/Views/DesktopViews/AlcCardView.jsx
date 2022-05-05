import BannerCard from "../../BannerCard";
import viewStates from "../../../utils/ViewStates";
import PropTypes from "prop-types";
import { DrinkContext } from "../../../utils/Context";
import { useContext, lazy, Suspense } from "react";

function AlcCardView({ setViewState, searchTerm }) {
  const DrinkCard = lazy(() => import("../../DrinkCard"));
  const context = useContext(DrinkContext);

  return (
    <>
      <BannerCard
        setViewState={setViewState}
        viewState={viewStates.mixView}
        cols="11"
        rows="1"
        bannerContent="⇨ Goto Drinks for Mixing! 🥤"
        key={"alc_banner"}
      />

      <div
        className="drink-card-container
        grid grid-cols-9 grid-rows-3 col-span-9 row-span-3 "
      >
        {context.alcDrinks
          .filter((drink) =>
            searchTerm
              ? drink.name.toLowerCase().includes(searchTerm.toLowerCase())
              : drink
          )
          .map((drink, index) => {
            return (
              <Suspense key={`sus_${drink.name}`} fallback={<div>Loading Card...</div>}>
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

AlcCardView.propTypes = {
  setViewState: PropTypes.func.isRequired,
  searchTerm: PropTypes.string,
};

export default AlcCardView;
