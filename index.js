const express = require("express");
const tele_bot = require("node-telegram-bot-api");
const mongoConnect = require('./config/dbConfig');
const app = express();
require('dotenv').config();

const bot = new tele_bot(process.env.TOKEN, {polling : true});

const {commands} = require("./routes/commands");
const priceAlert = require("./alert");

commands(bot);

setInterval( async()=>{
    await priceAlert(bot);
}, 3600000);

//connecting to cloud mongoDB
mongoConnect();

app.listen(4000,()=>{
    console.log("Listening on PORT 4000🚀");
})