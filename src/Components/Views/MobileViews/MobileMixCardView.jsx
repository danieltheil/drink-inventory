import BannerCard from "../../BannerCard";
import viewStates from "../../../utils/ViewStates";
import PropTypes from "prop-types";
import { useContext, lazy, Suspense } from "react";
import { DrinkContext } from "../../../utils/Context";

function MobileMixCardView({ setViewState, isMobile, searchTerm }) {
  const context = useContext(DrinkContext);
  const DrinkCard = lazy(() => import("../../DrinkCard"));

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
          key={"mobile_mix_banner"}
        />

        {context.mixDrinks
          .filter((drink) =>
            searchTerm
              ? drink.name.toLowerCase().includes(searchTerm.toLowerCase())
              : drink
          )
          .map((drink, index) => {
            return (
              <Suspense key={`sus_mobile_${drink.name}`} fallback={<div>Loading Card...</div>}>
                <DrinkCard
                  paramDrink={drink}
                  key={"mobile_" + drink.name}
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

MobileMixCardView.propTypes = {
  setViewState: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string,
};

export default MobileMixCardView;
