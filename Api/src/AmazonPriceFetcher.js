const JSONHandler = require('./JSONHandler');
const { getBase64ImageFrom } = require('./ImageHandler');

class AmazonPriceFetcher {

  async getPriceBy(url, productName) {
    if (!url) return "N/A";
    try {
      const response = await fetch(url);
      const body = await response.text();
      let split = body.split('a-offscreen');
      let price = split[1]?.substring(split[1].indexOf('>') + 1, split[1].indexOf('<'));
      console.log(price);
      return price?.includes('€') || price?.includes('$') ? price : 'N/A';
    } catch (e) {
      return "N/A"
    }
  }

  async updateJSON() {
    let jsonHandler = new JSONHandler();
    let drinks = jsonHandler.getDrinks();
    let newDrinks = [];
    for (let drink of drinks) {
      newDrinks.push({
        name: drink.name,
        amount: drink.amount,
        price: await this.getPriceBy(drink.url, drink.name),
        imageBase64: getBase64ImageFrom(drink.name),
        url: drink.url,
        type: drink.type
      })
    }
    jsonHandler.writeJSON(newDrinks);
  }

  async update() {
    await this.updateJSON();
    setTimeout(async () => await this.update(), 1000 * 60 * 60)
  }
}

module.exports = AmazonPriceFetcher;