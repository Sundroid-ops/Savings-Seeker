const dbData = require("./models/product");
const dayjs = require("dayjs");
const { get_productData } = require("./utils/checks");

//sends alerts to user based on price-drop
const priceAlert = async(bot)=>{
    const allList = await dbData.find({});

    for(let userList of allList){
        //checks if user wants to be notified about the price-drop or not
        if(userList.alert){
            for(let productList of userList.product){
                const now = dayjs();
                const lastAlert = dayjs(productList.alertSend);
                //scraps products data only if last alert was sent 6 hours from current time
                if(now.diff(lastAlert,'hour') >= 6){
                    const CurrentData = await get_productData(productList.URL);
                    
                    if(CurrentData.Product_Price <= productList.targetPrice){
                        bot.sendMessage(userList.user_ID, `${CurrentData.Product_Name} has price dropped to ${CurrentData.Product_Price}.\nCheck here ${productList.URL}`);
                        productList.alertSend = dayjs().toISOString();
                        await userList.save();
                    }
                }
            }
        }
    }
}

module.exports = priceAlert;
