import colors from "../../utils/Colors";
import BannerCard from "../BannerCard";
import Card from "../Card";
import viewStates from "../../utils/ViewStates";


function MobileMixCardView(props){

    return(
        <>
            <div className="grid grid-rows-10 w-screen h-max">

            <BannerCard setViewState={props.setViewState} viewState={viewStates.alcoholView}
                        rows="2"
                        bannerContent="⇨ Goto Alcohol List! 🍺"
                        gradient="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
                        isMobile={props.isMobile}
            />

            <Card name="Cola" amount="5" price="6.95€"
                  rows="2"
                  darkerColor={colors.darkCardBackground} color={colors.cardBackground}
                  fileName="cola.png"
                  urlType="cola"
                  isMobile={props.isMobile}
                  />
            <Card name="Fanta" amount= "6" price="2.50€"
                  rows="2"
                  darkerColor={colors.darkCardBackground} color={colors.cardBackground}
                  fileName="fanta.png"
                  urlType="fanta"
                  isMobile={props.isMobile}
                  />
            <Card name="Orange Juice" amount="5" price="8.00€"
                  secondName="Maracuja Juice" secondAmount="5" secondPrice="8.50€"
                  secondFileName="maracuja_juice.png"
                  secondURLType="maracuja"
                  rows="4"
                  darkerColor={colors.darkCardBackground} color={colors.cardBackground}
                  fileName="orange_juice.png"
                  urlType="orange"
                  isMobile={props.isMobile}
                  />
            <Card name="Sprite" amount="5" price="12.50€"
                  rows ="2"
                  darkerColor={colors.darkCardBackground} color={colors.cardBackground}
                  fileName="sprite.png"
                  urlType="sprite"
                  isMobile={props.isMobile}
                  />
            <Card name="Dr. Pepper" amount="5" price="10.20€"
                  rows ="2"
                  darkerColor={colors.darkCardBackground} color={colors.cardBackground}
                  fileName="dr_pepper.png"
                  urlType="dr_pepper"
                  isMobile={props.isMobile}
                  />
            </div>
        </>
    )
}

export default MobileMixCardView;