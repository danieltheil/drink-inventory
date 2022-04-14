import { useState } from "react";
import colors from "../utils/Colors";
import urls from "../utils/URLs";

// const apiResJSON = 
// {
//     mixDrinks: [
//         {
//             name: "Vodka",
//             amount: "5",
//             price: "6.95€",
//             amazonLink: "",
//         }
//     ],
//     
// }

function DrinkCard(props) {

    const [modifiedAmount, setAmount] = useState(props.amount);
    const [modifiedSecondAmout, setSecondAmount] = useState(props.secondAmount);


    function updateAmount(amount){
        /**update in db */
        return parseInt(modifiedAmount) + amount;
    }

    function updateSecondAmount(amount){
        /**update in db */
        return parseInt(modifiedSecondAmout) + amount;
    }

    return (
        <div
            className={`
                cardContainer 
                col-span-${props.cols} 
                row-span-${props.rows} 
                text-gray-50
                m-6 mt-10 ml-8
                p-2 rounded-lg 
                grid grid-rows-8 divide-y divide-gray-800`}
        style={{ border: "none", backgroundColor: props.color }}
        >

        {/* Price of Drink */}
        <div className="content-price
            ml-4 mt-4 
            text-2xl font-semibold
            row-span-0"
            style={{ color: colors.lightText }}
        >
            {props.price}
        </div>

        {/* Button Grid */}
        <div className="grid grid-cols-10">

            {/* Image Container */}
            <div className="image-container
                            ml-8 mt-4 mb-4 mr-8 col-span-3"
                >
                <img src={require(`../assets/${props.fileName}`)} alt="gay"
                    style={{ maxWidth: "120px", maxHeight: "120px" }} />
            </div>

            <button onClick={() => setAmount(updateAmount(-1))}
                    className="
                    h-12 col-span-1
                    mt-12 col-end-8 pl-6 pr-8
                    text-2xl font-extrabold
                    rounded-lg" style={{backgroundColor: colors.red, color:colors.darkText}}>
                -
            </button>

            <button onClick={() => setAmount(updateAmount(1))}
                    className="
                    h-12 col-span-1
                    mt-12 mr-8 col-end-10 pl-5 pr-8
                    text-2xl font-extrabold
                    rounded-lg" style={{backgroundColor: colors.green, color:colors.darkText}}>
                +
            </button>
        </div>
        
        {/* Name and Amount of Drink */}
        <div
            className="content-info ml-4 mt-2 text-gray-50 "
            style={{ color: colors.lightText }}
        >
            {props.name}: {modifiedAmount}x
        </div>

        <button
            // eslint-disable-next-line no-restricted-globals
            onClick={() => {location.href = urls[props.urlType]}}
            className="Link Container rounded-b-lg p-1 pt-2 pb-2 mt-4"
            style={{ backgroundColor: props.darkerColor }}
        >
            <div className="text-gray-50 text-left ml-6">Amazon Link:</div>
        </button>

        {/* Second Drink Field for big Cards */}
        {props.secondPrice ? (
            <div className="grid row-span-3 divide-y divide-gray-800">
                {/* Price of Second Drink */}
                <div
                    className="content-price ml-4 mt-4 text-2xl font-semibold text-gray-50"
                    style={{ color: colors.lightText }}
                >
                    {props.secondPrice}
                </div>

                <div className="grid grid-cols-10">

                    <div className="image-container
                            ml-8 mt-4 mb-4 mr-8 col-span-3">
                    <img src={require(`../assets/${props.secondFileName}`)} alt="oh no.. my pic.. its broken"
                        style={{ maxWidth: "120px", maxHeight: "120px" }} />
                    </div>

                    <button onClick={() => setSecondAmount(updateSecondAmount(-1))}
                            className="
                            h-12 col-span-1
                            mt-12 col-end-8 pl-6 pr-8 
                            text-2xl font-extrabold
                            rounded-lg" style={{backgroundColor: colors.red, color:colors.darkText}}>
                        -
                    </button>

                    <button onClick={() => setSecondAmount(updateSecondAmount(1))}
                            className="
                            h-12 col-span-1
                            mt-12 mr-12 col-end-10 pl-5 pr-8
                            text-2xl font-extrabold
                            rounded-lg" style={{backgroundColor: colors.green, color:colors.darkText}}>
                        +
                    </button>
            </div>

                {/* Name and Amount of Second Drink */}
                <div
                    className="optional-content-container ml-4 mt-2 text-gray-50"
                    style={{ color: colors.lightText }}
                >
                    {props.secondName}: {modifiedSecondAmout}x
                </div>

                
                {/* Button Grid of Second Drink */}
                <button
                        // eslint-disable-next-line no-restricted-globals
                    onClick={() => {location.href = urls[props.secondURLType]}}
                    className="Link Container rounded-b-lg"
                    style={{ backgroundColor: props.darkerColor }}
                >
                    <div className="text-gray-50 text-left ml-6 p-1"
                         style={{border: `4px solid ${props.darkerColor}`}}
                    >
                        Amazon Link:
                    </div>
                </button>
            </div>
        ) : null}
        </div>
    );
}

export default DrinkCard;
