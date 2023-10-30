const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/SavingsBot')
    .then(d=>console.log("Data Connection Secured"))
    .catch(err=> console.log("Data Connection Error"));

const productSchema = new mongoose.Schema({
    user_ID : {
        type : String,
    },
    alert : {
        type : Boolean
    },
    product : [
        {
            name : {
                type : String
            },
            URL : {
                type : String
            },
            targetPrice : {
                type : Number
            },
            alertSend : {
                type : Date,
                default : Date.now
            },
            _id : false
        }
    ]
});

module.exports = mongoose.model("TrackProduct",productSchema);