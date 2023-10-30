const cherrio = require('cheerio');

const URL_Check = (url)=>{
    try{
        new URL(url);
        return true;
    }catch(err){
        return false;
    }
}

const getDomain = (url)=>{
    const shrinkedURL = new URL(url);
    const domain =  shrinkedURL.hostname.split('.');
    return domain[1];
}

const get_htmlElements = (domain)=>{
    if(domain === "amazon"){
        return {
            name_element : "#productTitle",
            price_element : ".a-price-whole"
        }
    }
    else if(domain === "flipkart"){
        return {
            name_element : ".B_NuCI",
            price_element : "._30jeq3"
        }
    }
}

const get_htmlData = async(url,htmlElements)=>{
    const raw = await fetch(url);
    const html = await raw.text();
    const $ = cherrio.load(html);

    const price = $(htmlElements.price_element).text().split('.')[0];
    const name = $(htmlElements.name_element).text().trim();

    return {
        Product_Name : name,
        Product_Price : parseFloat(parseFloat(price.replace(/,/g, '')))
    }
}

const get_productData = async(url)=>{
    const domain = getDomain(url);
    const htmlElements =  get_htmlElements(domain);
    return await get_htmlData(url,htmlElements);
}

module.exports = {
    URL_Check,
    getDomain,
    get_htmlElements,
    get_htmlData,
    get_productData
}