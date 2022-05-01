import DrinkCard from "../../DrinkCard";
import BannerCard from "../../BannerCard";
import viewStates from "../../../utils/ViewStates";
import PropTypes from "prop-types";
import { useContext } from "react";
import { DrinkContext } from "../../../utils/Context";

function MobileMixCardView({ setViewState, isMobile, searchTerm }) {
  const context = useContext(DrinkContext);

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

        {context.alcDrinks
          .filter((drink) =>
            searchTerm
              ? drink.name.toLowerCase().includes(searchTerm.toLowerCase())
              : drink
          )
          .map((drink) => {
            return (
              <DrinkCard
                paramDrink={drink}
                key={"mobile_" + drink.name}
                image={context.imageMap[drink.name]}
              />
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
