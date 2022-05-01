const express = require('express');
const app = express();
const JSONHandler = require('./JSONHandler');
const AmazonPriceFetcher = require('./AmazonPriceFetcher');
const jsonHandler = new JSONHandler();
const { createImages } = require('./ImageHandler');


const drinkTypes = {
    alcohol: 'alc',
    mix: 'mix'
}

app.use(express.json({
    limit: '50mb'
}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    next();
})


app.get('/drinks/alc', (req, res) => {
    res.send(jsonHandler.getDrinksByType(drinkTypes.alcohol));
});


app.get('/drinks/mix', (req, res) => {
    res.send(jsonHandler.getDrinksByType(drinkTypes.mix));
});


app.get('/drinks/images', (req, res) => {
    res.send(jsonHandler.getImageMap());
});


app.post('/drinks', (req, res) => {
    let status = jsonHandler.writeDrinks(req.body);
    res.status(status);
    res.send();
});


app.post('/addDrink', (req, res) => {
    let status = jsonHandler.addDrinkToJSON(req.body);
    res.status(status);
    res.send();
})


let server = app.listen(8081, () => {
    let host = server.address().address;
    console.log(host)
    let port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});



(async () => {
    createImages(jsonHandler.getDrinks());
    const amazonPriceFetcher = new AmazonPriceFetcher();
    await amazonPriceFetcher.update();
})();