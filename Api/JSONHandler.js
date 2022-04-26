class JSONHandler{
    fs = require('fs');
    
    getDrinksByType(type) {
        let drinks = JSON.parse(this.fs.readFileSync(__dirname + '/drinks.json', 'utf8'));
        drinks = drinks.filter(drink => drink.type === type);
        return drinks;
    }

    
    getDrinks(){
        return JSON.parse(this.fs.readFileSync(__dirname + '/drinks.json', 'utf8'));
    }
    

    buildDrinkObjFrom(drink){
        if(!drink.name) throw new Error('name is required');
        if(!drink.amount && drink.amount !== 0) throw new Error('amount is required');
        let parsedName = drink.name.toLowerCase().replace(" ", "_").replace(".", "");
        

        return {
            "name" : drink.name,
            "amount": drink.amount,
            "fileName" : `${parsedName}.webp`,
            "price": drink.price,
            "url" : drink.url,
            "type" : drink.type,
        };
    }
    

    buildJSONArr(drinksData){
        let jsonArr = [];
        // in case single Drink Object is added
        if(!Array.isArray(drinksData)) return [this.buildDrinkObjFrom(drinksData)];
        for(let drink of drinksData){
            jsonArr.push(this.buildDrinkObjFrom(drink));
        }
        return jsonArr;
    }
    

    writeJSON(drinks){
        let jsonArr = this.buildJSONArr(drinks);
        this.fs.writeFile(__dirname + '/drinks.json', JSON.stringify(jsonArr),{encoding: 'utf-8', flag: 'w'}, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    }


    writeDrinks(drinks){
        try{
            this.writeJSON(drinks);
            return 201;
        }catch(err){
            console.log(err);
            return 400;
        }
    }


    isDrinkInJSON(drink){
        let drinks = this.getDrinks();
        return drinks.some(elem => elem.name === drink.name);
    }

    
    addDrinkToJSON(drink) {
        let drinks = this.getDrinks();
        try{
            if(!this.isDrinkInJSON(drink)){
                drinks.push(this.buildDrinkObjFrom(drink));
            }else {
                drinks[drinks.findIndex(elem => elem.name === drink.name)].amount = drink.amount;
            }                
            this.writeJSON(drinks);
            return 201;
        }catch(err){
            console.log(err);
            return 400;
        }
    }
}

module.exports = JSONHandler;