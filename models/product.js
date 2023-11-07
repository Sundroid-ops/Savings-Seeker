const { mongoose } = require("mongoose");

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