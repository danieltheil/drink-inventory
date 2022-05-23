const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGE_PATH = path.join(__dirname + "/assets/images/");

function saveImage(drinkName, imageBase64) {
    let sanitizedName = drinkName.toLowerCase().replaceAll(" ", "_").replaceAll(".", "");
    const base64Data = imageBase64.replace(/^data:image\/png;base64,/, "");
    let buff = new Buffer.from(base64Data, 'base64');
    fs.writeFileSync(path.join(`${IMAGE_PATH}${sanitizedName}.png`), buff);
    resizeImage(120, 120, sanitizedName);
}


function getBase64ImageFrom(drinkName) {
    try {
        let sanitizedName = drinkName.toLowerCase().replace(" ", "_").replace(".", "")
        let base64String = fs.readFileSync(path.join(`${IMAGE_PATH}small_${sanitizedName}.png`), {
            encoding: 'base64'
        });
        if (base64String.substring(0, 100).includes("dataimage/pngbase64")) {
            base64String = base64String.replace("dataimage/pngbase64", "");
        }
        return base64String.includes("data:image/png;base64,") ? base64String : "data:image/png;base64," + base64String;;
    } catch (err) {
        return "";
    }
}


function resizeImage(width, height, fileName) {

    sharp(`${IMAGE_PATH}${fileName}.png`).resize(width, height, {
        fit: 'inside'
    }).toFile(`${IMAGE_PATH}small_${fileName}.png`, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`resized: ${fileName}`);
        }
    });
}

function createImages(drinks){
    drinks.forEach(drink => saveImage(drink.name, drink.imageBase64));
}

function deleteImages(drink){
    try{
        let sanitizedName = drink.name.toLowerCase().replace(" ", "_").replace(".", "")
        fs.unlinkSync(path.join(`${IMAGE_PATH}${sanitizedName}.png`));
        fs.unlinkSync(path.join(`${IMAGE_PATH}small_${sanitizedName}.png`));
    }catch(err){
        console.log("failed to delete image files");
    }
}


module.exports = {
    saveImage,
    getBase64ImageFrom,
    resizeImage, 
    createImages,
    deleteImages
}