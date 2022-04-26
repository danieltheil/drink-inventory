import Card from "../DrinkCard";
import colors from "../../utils/Colors";
import BannerCard from "../BannerCard";
import viewStates from "../../utils/ViewStates";
import { useState, useEffect } from "react";

function MobileAlcCardView(props) {
  let [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`http://localhost:8081/drinks/alc`);
      const data = await result.json();
      setDrinks(data);
    };
    fetchData();
  }, []);

  
  return (
    <>
      <div className="grid grid-rows-10 w-screen h-max">
        <BannerCard
          setViewState={props.setViewState}
          viewState={viewStates.mixView}
          rows="2"
          bannerContent="⇨ Goto Drinks for Mixing! 🥤"
          gradient="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
          isMobile={props.isMobile}
        />

        {drinks.map((drink, index) => {
          return (
            <>
              <Card
                name={drink.name}
                amount={drink.amount}
                price={drink.price}
                key={`${index}`}
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

export default MobileAlcCardView;
