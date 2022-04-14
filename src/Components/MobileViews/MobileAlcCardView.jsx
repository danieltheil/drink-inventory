import colors from "../../utils/Colors";
import BannerCard from "../BannerCard";
import Card from "../Card";
import viewStates from "../../utils/ViewStates";

function MobileAlcCardView(props){
    return (<>
            <div className="grid grid-rows-10 w-screen h-max">

            <BannerCard setViewState={props.setViewState} viewState={viewStates.mixView}
                        rows="2"
                        bannerContent="⇨ Goto Drinks for Mixing! 🥤"
                        gradient="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
                        isMobile={props.isMobile}
            />

            <Card name="Vodka" amount="5" price="6.95€"
                  rows="2"
                  darkerColor={colors.darkCardBackground} color={colors.cardBackground}
                  fileName="vodka.png"
                  urlType="vodka"
                  />
            <Card name="Beer" amount= "6" price="2.50€"
                  rows="2"
                  darkerColor={colors.darkCardBackground} color={colors.cardBackground}
                  fileName="beer.png"
                  urlType="beer"
                  />
            <Card name="Barcadi" amount="5" price="8.00€"
                  secondName="Barcadi Razz" secondAmount="5" secondPrice="8.50€"
                  secondFileName="barcadi_razz.png"
                  secondURLType="barcadi_razz"
                  rows="4"
                  darkerColor={colors.darkCardBackground} color={colors.cardBackground}
                  fileName="barcadi.png"
                  urlType="barcadi"
                  />
            <Card name="Fickn" amount="5" price="12.50€"
                  rows ="2"
                  darkerColor={colors.darkCardBackground} color={colors.cardBackground}
                  fileName="ficken.png"
                  urlType="ficken"
                  />
            <Card name="43er" amount="5" price="10.20€"
                  rows ="2"
                  darkerColor={colors.darkCardBackground} color={colors.cardBackground}
                  fileName="43er.png"
                  urlType="43er"
                  />
            </div>
        </>)
}

export default MobileAlcCardView;