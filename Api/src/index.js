const express = require('express');
const app = express();
const JSONHandler = require('./JSONHandler');
const AmazonPriceFetcher = require('./AmazonPriceFetcher');
const jsonHandler = new JSONHandler();
const { createImages } = require('./ImageHandler');
const fs = require('fs');
const http = require('http');

//if you want to use https get cert and key and use https server instead (line 63)
// const https = require('https');
// const key = fs.readFileSync('KEY_PATH', 'utf8');
// const cert = fs.readFileSync('CERT_PATH', 'utf8');

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
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
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


app.delete('/drink', (req, res) => {
    let status = jsonHandler.delteDrink(req.body);
    res.status(status);
    res.send();
});


app.post('/addDrink', (req, res) => {
    let status = jsonHandler.addDrinkToJSON(req.body);
    res.status(status);
    res.send();
})

const httpServer = http.createServer(app);
httpServer.listen(8080);

// const httpsServer = https.createServer({key: key, cert: cert}, app);
// httpsServer.listen(8443);


(async () => {
    createImages(jsonHandler.getDrinks());
    const amazonPriceFetcher = new AmazonPriceFetcher();
    await amazonPriceFetcher.update();
})();