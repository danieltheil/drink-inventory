const API_URL = "http://localhost:8081"

export function addDrink(newDrink) {
    return fetch(`${API_URL}/addDrink`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newDrink),
    })
}

export function fetchDrinks(setAlcDrinks, setMixDrinks) {
    const fetchData = async () => {
        const alcResult = await fetch(`${API_URL}/drinks/alc`);
        const alcData = await alcResult.json();
        console.log(alcData);
        setAlcDrinks(alcData);

        const mixResult = await fetch(`${API_URL}/drinks/mix`);
        const mixData = await mixResult.json();
        console.log(mixData);
        setMixDrinks(mixData);
    };
    fetchData();
}

export function fetchImages(setImageMap) {
    const fetchData = async () => {
        const result = await fetch(`${API_URL}/drinks/images`);
        const imageMap = await result.json();
        console.log(imageMap);
        setImageMap(imageMap);
    };
    fetchData();
}