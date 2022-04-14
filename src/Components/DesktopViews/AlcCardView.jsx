import Card from '../Card'
import colors from '../../utils/Colors';
import BannerCard from '../BannerCard';
import viewStates from '../../utils/ViewStates';

function AlcCardView({setViewState}){

    return (
        <>
            <BannerCard setViewState={setViewState} viewState={viewStates.mixView}
                        cols="11" rows="1"
                        bannerContent="⇨ Goto Drinks for Mixing! 🥤"
                        gradient="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
            />

            <Card name="Vodka" amount="5" price="6.95€"
                  cols="4" rows="1" 
                  darkerColor={colors.darkCardBackground} color={colors.cardBackground}
                  fileName="vodka.png"
                  urlType="vodka"
            />

            <Card name="Beer" amount= "6" price="2.50€"
                  cols="3" rows="1"
                  darkerColor={colors.darkCardBackground} color={colors.cardBackground}
                  fileName="beer.png"
                  urlType="beer"
            />

            <Card name="Barcadi" amount="5" price="8.00€"
                  cols="3" rows="2"
                  secondName="Barcadi Razz" secondAmount="5" secondPrice="8.50€"
                  secondFileName="barcadi_razz.png"
                  secondURLType="barcadi_razz"
                  darkerColor={colors.darkCardBackground} color={colors.cardBackground}
                  fileName="barcadi.png"
                  urlType="barcadi"
            />
            
            <Card name="Ficken" amount="5" price="12.50€"
                  cols="3" rows ="1"
                  darkerColor={colors.darkCardBackground} color={colors.cardBackground}
                  fileName="ficken.png"
                  urlType="ficken"
            />
            
            <Card name="43er" amount="5" price="10.20€"
                  cols="4" rows ="1"
                  darkerColor={colors.darkCardBackground} color={colors.cardBackground}
                  fileName="43er.png"
                  urlType="43er"
            />
        </>
    )
}

export default AlcCardView;