const {
  registerProduct,
  registerUser,
  removeProduct,
  toggleAlert,
  showProducts
} = require("../middleware/commandLogic");

const commands = (bot)=>{
    bot.onText(/\/start/, async(msg)=>{
      bot.sendMessage(msg.chat.id, await registerUser(msg.chat.id));
    });

    bot.onText(/\/addproduct (.+)/, async(msg,match)=>{
      const input_data = match[1].split(' ');
      bot.sendMessage(msg.chat.id, await registerProduct(msg.chat.id,input_data));
    })

    bot.onText(/\/remove (.+)/, async(msg,match)=>{
      const input_data = match[1];
      bot.sendMessage(msg.chat.id, await removeProduct(msg.chat.id, input_data));
    })

    bot.onText(/\/toggleAlert/, async(msg)=>{
      bot.sendMessage(msg.chat.id, await toggleAlert(msg.chat.id));
    })

    bot.onText(/\/showproducts/, async(msg)=>{
      bot.sendMessage(msg.chat.id, await showProducts(msg.chat.id));
    })
}

module.exports = {commands};