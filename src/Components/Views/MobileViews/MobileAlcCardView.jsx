
import DrinkCard from "../../DrinkCard";
import BannerCard from "../../BannerCard";
import viewStates from "../../../utils/ViewStates";
import PropTypes from "prop-types";
import { useContext } from "react";
import { DrinkContext } from "../../../utils/Context";

function MobileAlcCardView({ setViewState, isMobile, searchTerm }) {
  const context = useContext(DrinkContext);

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
          key={"mobile_alc_banner"}
        />

        {context.alcDrinks
          .filter((drink) =>
            searchTerm
              ? drink.name.toLowerCase().includes(searchTerm.toLowerCase())
              : drink
          )
          .map((drink, index) => {
            return (
                <DrinkCard
                  paramDrink={drink}
                  key={"mobile_" + drink.name}
                  image={context.imageMap[drink.name]}
                  animationDuration={index}
                />
            );
          })}
      </div>
    </>
  );
}

MobileAlcCardView.propTypes = {
  setViewState: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string,
};

export default MobileAlcCardView;
