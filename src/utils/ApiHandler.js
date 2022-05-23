import viewStates from "./ViewStates";

const API_URL = process.env.REACT_APP_API_URL;

export function addDrink(newDrink, context) {
    fetch(`${API_URL}/addDrink`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newDrink),
        }).then((res) => {
            if (res.status === 201) {
                //update imageMap with uploaded image
                context.imageMap[newDrink.name] = newDrink.imageBase64;
                context.setImageMap(context.imageMap);
                if (newDrink.type === viewStates.alcoholView) {
                    context.setAlcDrinks([...context.alcDrinks, newDrink]);
                } else {
                    context.setMixDrinks([...context.mixDrinks, newDrink]);
                }
            }
            console.log(res.status);
            console.log("form submitted");
        })
        .catch((err) => console.log(err));

}

export function updateDrink(newDrink) {
    fetch(`${API_URL}/addDrink`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newDrink),
        })
        .then((res) => console.log(res.status))
        .catch((err) => console.log(err));
}

export function fetchDrinks(context) {
    const fetchData = async () => {
        const alcResult = await fetch(`${API_URL}/drinks/alc`);
        const alcData = await alcResult.json();
        // console.log(alcData);
        context.setAlcDrinks(alcData);

        const mixResult = await fetch(`${API_URL}/drinks/mix`);
        const mixData = await mixResult.json();
        // console.log(mixData);
        context.setMixDrinks(mixData);
    };
    fetchData();
}

export function fetchImages(setImageMap) {
    const fetchData = async () => {
        const result = await fetch(`${API_URL}/drinks/images`);
        const imageMap = await result.json();
        setImageMap(imageMap);
    };
    fetchData();
}

export function deleteDrink(drinkToDelete, context) {
    fetch(`${API_URL}/drink`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(drinkToDelete),
        }).then((res) => {
            if (res.status === 201) {
                let drinks = context.mixDrinks.concat(context.alcDrinks)
                drinks = drinks.filter(drink => drink.name !== drinkToDelete.name);
                
                context.setAlcDrinks(
                    drinks.filter((drink) => drink.type === viewStates.alcoholView)
                );
                context.setMixDrinks(
                    drinks.filter((drink) => drink.type === viewStates.mixView)
                );
            }
            console.log(res.status);
        })
        .catch((err) => console.log(err));
}