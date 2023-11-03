const { default: puppeteer } = require('puppeteer');

const scrapper = async(url, htmlElements)=>{
    const browser = await puppeteer.launch({ headless : true });
    const page = await browser.newPage();
    await page.goto(url);

    const productData = await page.evaluate((htmlElements) => {
        const data = {
            status: true,
            Product_Name: document.querySelector(htmlElements.name_element).innerText,
            Product_Price: parseFloat((document.querySelector(htmlElements.price_element).innerText).replace('₹', '').replace(',', '').replace('.',''))
        }
        
        return data;
    }, htmlElements)

    await browser.close();
    return productData;
}

module.exports = { scrapper }