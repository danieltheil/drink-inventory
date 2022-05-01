const puppeteer = require('puppeteer');
const JSONHandler = require('./JSONHandler');
const { getBase64ImageFrom } = require('./ImageHandler');

class AmazonPriceFetcher {

  async getPriceBy(url) {
    if (!url) return "N/A";
    try {
      let browser = await puppeteer.launch();
      let page = await browser.newPage();
      await page.goto(url);
      const html = await page.content();
      let split = html.split('a-offscreen');
      let price = split[1].substring(split[1].indexOf('>') + 1, split[1].indexOf('<'));
      console.log(price);
      await browser.close();
      return price.includes('€') || price.includes('$') ? price : 'N/A';
    } catch (err) {
      console.log(err);
      return 'N/A';
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
        price: await this.getPriceBy(drink.url),
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