const productTracker = require("../models/product");
const {URL_Check, get_productData} = require("../utils/checks");

const registerUser = async(chat_ID)=>{
    try{
        const findUser = await productTracker.find({ user_ID: chat_ID });
        if(findUser.length){
            return "Already Registered✅";
        }
        const newUser = new productTracker({
            user_ID: chat_ID,
            alert: true
        });
        await newUser.save();
        return "Registered Successfully🚀";
    }catch(err){
        console.log(err);
        return "Server Error";
    }
};

const registerProduct = async(chat_ID,input_data)=>{
    try{
        const url = input_data[0];
        const priceTrigger = parseFloat(input_data[1]);
        if(!URL_Check(url)){
            return "Invalid URL";
        }

        const findProduct = await productTracker.find({ user_ID: chat_ID , product: {$elemMatch: { URL: url } } });
        if(findProduct.length){
            return "This Product is already registered";
        }
        const findUser = await productTracker.findOne({ user_ID: chat_ID });
        const pageData = await get_productData(url)

        if(!pageData.status){
            return 'Sorry, We do not track these website';
        }

        if(priceTrigger >= pageData.Product_Price){
            return `Please enter the input price lower than the current price - ${pageData.Product_Price}`;
        }

        findUser.product.push({
            name: pageData.Product_Name,
            URL: url,
            targetPrice: priceTrigger
        });

        await findUser.save();
        return `Registered ${pageData.Product_Name}`;

    }catch(err){
        console.log(err);
        return "Server Error";
    }
};

const removeProduct = async(chat_ID, url)=>{
    try{
        const findProduct = await productTracker.find({ user_ID: chat_ID , product: {$elemMatch: { URL: url } } });
        if(findProduct.length){
            await productTracker.updateOne(
                {user_ID : chat_ID},
                { $pull : { product : { URL : url }}}
            )
            
            return `Removed and stopped tracking this product`;
        }
        return "No such product was registered by you";
    }catch(err){
        console.log(err);
        return 'Server Error'
    }

}

const toggleAlert = async(chat_ID)=>{
    try{
        const findUser = await productTracker.findOne({ user_ID : chat_ID });
        findUser.alert = !findUser.alert;
        await findUser.save();
        if(findUser.alert){
            return "Product Alerts are turned ON";
        }

        return "Product Alerts are turned OFF";
    }catch(err){
        console.log(err);
        return 'Server Error';
    }
}

const showProducts = async(chat_ID)=>{
    try{
        const findUser = await productTracker.findOne({ user_ID : chat_ID });

        if(!findUser.product){
            return 'No product registered yet';
        }

        let productList = 'Tracking Products :\n\n';

        for(let i=0; i<findUser.product.length; i++){
            productList += `${i+1}.\nName⬇️\n${findUser.product[i].name}\n\nLink⬇️\n${findUser.product[i].URL}\n\n`;
        }

        return productList;

    }catch(err){
        console.log(err);
        return 'Server Error';
    }
}

module.exports = {
    registerUser,
    registerProduct,
    removeProduct,
    toggleAlert,
    showProducts
}