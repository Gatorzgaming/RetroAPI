const { Client, MessageEmbed, Message} = require("discord.js");

const bot = new Client();
module.exports = {
    name: "coinflip",
    description: "Flips a coin, Heads or tails?",
    cooldown: 5,
   
}

module.exports.execute = async (message) =>{

    let flip = Math.floor(Math.random() * 2)
if (flip === 1) {
    message.channel.send("Heads")
}
else {
    message.channel.send("Tails")
}
}
