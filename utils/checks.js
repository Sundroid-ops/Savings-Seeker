const { scrapper } = require('./scraper');

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
            found : true,
            name_element : "#productTitle",
            price_element : ".a-price-whole"
        }
    }
    else if(domain === "flipkart"){
        return {
            found : true,
            name_element : ".B_NuCI",
            price_element : "._30jeq3"
        }
    }
    return { found : false };
}

const get_productData = async(url)=>{
    const domain = getDomain(url);
    const htmlElements =  get_htmlElements(domain);

    if(!htmlElements.found){
        return { status : false };
    }

    return await scrapper(url, htmlElements);
}

module.exports = {
    URL_Check,
    getDomain,
    get_htmlElements,
    get_productData
}