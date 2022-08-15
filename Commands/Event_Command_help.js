const { Client, MessageEmbed, Channel } = require("discord.js");

const bot = new Client()
module.exports = {
    name: "events",
    description: "Gives the Help Events Command Embed",
    cooldown: 5,
   
}

module.exports.execute = async (message) =>{
 
message.channel.send("Comming Soon:tm:")
}