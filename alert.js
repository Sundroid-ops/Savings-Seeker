const cheerio = require("cheerio");
const dbData = require("./models/product");
const dayjs = require("dayjs");
const { get_productData, getDomain } = require("./utils/checks");

//sends alerts to user based on price-drop
const priceAlert = async(bot)=>{
    const allList = await dbData.find({});

    for(let userList of allList){
        if(userList.alert){
            for(let productList of userList.product){
                const now = dayjs();
                const lastAlert = dayjs(productList.alertSend);

                if(now.diff(lastAlert,'hour') >= 6){
                    const CurrentData = await get_productData(productList.URL);
                    if(CurrentData.Product_Price <= productList.targetPrice){
                        bot.sendMessage(userList.user_ID, `${CurrentData.Product_Name} has price dropped to ${CurrentData.Product_Price} on ${getDomain(productList.URL)}`);
                        productList.alertSend = dayjs().toISOString();
                        await userList.save();
                    }
                }
            }
        }
    }
}

module.exports = priceAlert;
