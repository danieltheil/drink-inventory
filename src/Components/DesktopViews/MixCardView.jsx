import Card from '../Card'
import colors from '../../utils/Colors';
import BannerCard from '../BannerCard';
import viewStates from '../../utils/ViewStates';

function MixCardView({setViewState}){

    return (
        <>
            <BannerCard setViewState={setViewState} viewState={viewStates.alcoholView}
                        cols="11" rows="1"
                        bannerContent="⇨ Goto Alcohol List! 🍺"
                        gradient="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
            />        
            <Card name="Cola" amount="5" price="6.95€"
                  cols="4" rows="1"
                  darkerColor={colors.darkCardBackground} color={colors.cardBackground}
                  fileName='cola.png'
                  urlType='cola'
            />
            <Card name="Fanta" amount= "6" price="2.50€"
                  cols="3" rows="1"
                  darkerColor={colors.darkCardBackground} color={colors.cardBackground}
                  fileName='fanta.png'
                  urlType='fanta'
            />
            <Card name="Orange Juice" amount="5" price="8.00€"
                  cols="4" rows="2"
                  secondName="Maracuja Juice" secondAmount="5" secondPrice="8.50€"
                  secondFileName='maracuja_juice.png'
                  secondURLType='maracuja'
                  darkerColor={colors.darkCardBackground} color={colors.cardBackground}
                  fileName='orange_juice.png'
                  urlType='orange'
            />
            <Card name="Sprite" amount="5" price="12.50€"
                  cols="3" rows ="1"
                  darkerColor={colors.darkCardBackground} color={colors.cardBackground}
                  fileName='sprite.png'
                  urlType='sprite'
            />
            <Card name="Dr. Pepper" amount="5" price="10.20€"
                  cols="4" rows ="1"
                  darkerColor={colors.darkCardBackground} color={colors.cardBackground}
                  fileName='dr_pepper.png'
                  urlType='dr_pepper'
            />
        </>
    )
}

export default MixCardView;