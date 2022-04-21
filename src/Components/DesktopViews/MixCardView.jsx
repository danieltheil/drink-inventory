import Card from "../DrinkCard";
import colors from "../../utils/Colors";
import BannerCard from "../BannerCard";
import viewStates from "../../utils/ViewStates";
import { useState, useEffect } from "react";

function MixCardView({ setViewState }) {
  let [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`http://localhost:8081/drinks/mix`);
      const data = await result.json();
      setDrinks(data);
    };
    fetchData();
  }, []);

  
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

      {drinks.map((drink, index) => {
        return (
          <>
            <Card
              name={drink.name}
              amount={drink.amount}
              price="5.00€"
              key={`${index}`}
              cols="3"
              rows="1"
              darkerColor={colors.darkCardBackground}
              color={colors.cardBackground}
              fileName={drink.fileName}
              urlType={drink.urlType}
            />
          </>
        );
      })}
    </>
  );
}

export default MixCardView;
